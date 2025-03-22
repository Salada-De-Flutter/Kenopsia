package main

import (
	"database/sql"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

var db *sql.DB

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Nenhum arquivo .env encontrado, usando variáveis de ambiente do sistema")
	}

	connStr := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_SSLMODE"),
	)

	db, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatalf("Erro ao abrir conexão com o banco: %v", err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatalf("Erro ao conectar ao banco: %v", err)
	}

	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS users (
			uuid TEXT PRIMARY KEY,
			nick TEXT NOT NULL,
			senha TEXT NOT NULL,
			imagem BYTEA
		)
	`)
	if err != nil {
		log.Fatalf("Erro ao criar tabela: %v", err)
	}

	log.Println("Conexão com o PostgreSQL estabelecida com sucesso!")
}

// Middleware para adicionar cabeçalhos CORS
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Permite requisições de qualquer origem (para desenvolvimento)
		w.Header().Set("Access-Control-Allow-Origin", "*")
		// Permite os métodos HTTP que você usa
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		// Permite cabeçalhos comuns
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Se for uma requisição OPTIONS (preflight), retorna imediatamente
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Chama o próximo handler
		next.ServeHTTP(w, r)
	})
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Método não permitido", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Erro ao parsear o formulário", http.StatusBadRequest)
		return
	}

	uuid := r.FormValue("uuid")
	nick := r.FormValue("username")
	senha := r.FormValue("password")

	file, handler, err := r.FormFile("profileImage")
	if err != nil && err != http.ErrMissingFile {
		http.Error(w, "Erro ao obter a imagem", http.StatusBadRequest)
		return
	}
	defer func() {
		if file != nil {
			file.Close()
		}
	}()

	var imageData []byte
	var imageInfo string
	if file != nil {
		imageData, err = io.ReadAll(file)
		if err != nil {
			http.Error(w, "Erro ao ler os dados da imagem", http.StatusInternalServerError)
			return
		}
		imageInfo = fmt.Sprintf("Imagem recebida: %s (tamanho: %d bytes)", handler.Filename, len(imageData))
	} else {
		imageInfo = "Nenhuma imagem enviada"
	}

	fmt.Printf(
		"Dados recebidos:\n  UUID: %s\n  Nick: %s\n  Senha: %s\n  %s\n",
		uuid, nick, senha, imageInfo,
	)

	_, err = db.Exec(
		"INSERT INTO users (uuid, nick, senha, imagem) VALUES ($1, $2, $3, $4)",
		uuid, nick, senha, imageData,
	)
	if err != nil {
		http.Error(w, fmt.Sprintf("Erro ao cadastrar usuário: %v", err), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, `{"status": "success", "message": "Usuário cadastrado com sucesso", "uuid": "%s"}`, uuid)
}

func main() {
	// Aplica o middleware CORS ao handler
	handler := corsMiddleware(http.HandlerFunc(registerHandler))
	http.Handle("/register", handler)
	log.Println("Servidor rodando em http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}