import React from 'react';
import { Download, Github, MessageCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download');
    downloadSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300"
          >
            <a className="text-orange-500 hover:text-orange-400">Kenopsia</a>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-8 text-orange-400"
          >
            Revivendo a Comunidade de Streamers Mobile
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white mb-12 max-w-2xl mx-auto"
          >
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToDownload}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2 mx-auto"
          >
            <Download className="w-5 h-5" />
            Baixar App Beta
          </motion.button>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-orange-500" />
          </motion.div>
        </div>
      </motion.section>

      {/* Sobre o Projeto */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-6 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-orange-500">Sobre o Projeto</h2>
          <div className="bg-black border-2 border-orange-500/20 p-8 rounded-xl shadow-xl space-y-6">
            <p className="text-lg leading-relaxed text-white">
              O <a href="https://github.com/Salada-De-Flutter/Kenopsia" className="text-orange-500 hover:text-orange-400">Kenopsia</a> é uma plataforma para recriar o espírito único do Omlet Arcade, onde os antigos usuários podem bater um papo e criar comunidades – tudo com uma pegada simples e aquela vibe nostálgica que só o Omlet tinha. Eu sinto falta das lives caóticas, das risadas no chat e daquela energia louca que me conectava a tanta gente, e é por isso que o <a href="https://github.com/Salada-De-Flutter/Kenopsia" className="text-orange-500 hover:text-orange-400">Kenopsia</a> tá acontecendo. Esse projeto é minha homenagem direto do coração àquela era, além de um desafio maluco pra testar até onde minhas skills de desenvolvedor me levam.
            </p>
            <p className="text-lg leading-relaxed text-white">
              Quer saber mais sobre mim? Eu sou <a href="https://github.com/Salada-De-Flutter" className="text-orange-500 hover:text-orange-400">Salada de Flutter</a>, e você pode dar uma olhada no código do <a href="https://github.com/Salada-De-Flutter/Kenopsia" className="text-orange-500 hover:text-orange-400">Kenopsia</a> no GitHub!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Como Contribuir */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-6 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-orange-500">Como Contribuir</h2>
          <div className="bg-black border-2 border-orange-500/20 p-8 rounded-xl shadow-xl space-y-6">
            <p className="text-lg leading-relaxed text-white">
              Se você quer ajudar a fazer o <a href="https://github.com/Salada-De-Flutter/Kenopsia" className="text-orange-500 hover:text-orange-400">Kenopsia</a> ainda melhor, eu ficaria muito feliz! Dá uma passada no repositório do GitHub, olha as issues abertas e me ajuda com ideias ou código. Toda contribuição conta, e eu adoraria ter você no time!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Roadmap */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-6 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-orange-500">Roadmap</h2>
          <div className="bg-black border-2 border-orange-500/20 p-8 rounded-xl shadow-xl space-y-6">
            <p className="text-lg leading-relaxed text-white">
              Tenho grandes planos para o <a href="https://github.com/Salada-De-Flutter/Kenopsia" className="text-orange-500 hover:text-orange-400">Kenopsia</a>. Aqui está o que eu quero adicionar em breve:
            </p>
            <ul className="list-disc list-inside text-white">
              <li>Suporte a mais plataformas de streaming, para você alcançar ainda mais gente.</li>
              <li>Ferramentas de moderação avançadas, porque eu sei como é importante manter o chat em ordem.</li>
              <li>Integração com jogos populares, para facilitar suas lives.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Contato */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-6 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-orange-500">Contato</h2>
          <div className="bg-black border-2 border-orange-500/20 p-8 rounded-xl shadow-xl space-y-6">
            <p className="text-lg leading-relaxed text-white">
              Quer falar comigo? Me acha no <a href="https://discord.com/users/820967650812362772" className="text-orange-500 hover:text-orange-400">Discord</a> ou no <a href="https://github.com/Salada-De-Flutter" className="text-orange-500 hover:text-orange-400">GitHub</a>. Pode mandar suas sugestões, feedback ou só dizer um oi – eu respondo tudo!
            </p>
          </div>
        </div>
      </motion.section>

      {/* Download */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="download" 
        className="py-12 px-4 bg-black border-y border-orange-500/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-orange-500">Download Beta e Site</h2>
          <p className="text-lg mb-8 text-white">
            Experimente o <a href="https://github.com/Salada-De-Flutter/Kenopsia" className="text-orange-500 hover:text-orange-400">Kenopsia</a> Beta agora ou visite o site para mais detalhes!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="w-full md:w-64 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2 justify-center"
            >
              <Download className="w-5 h-5" />
              Baixar APK Beta
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://kenopsia-lime.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-64 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2 justify-center"
            >
              Visitar Site
            </motion.a>
          </div>
          <p className="mt-4 text-sm text-orange-400">
            Disponível para Android
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white">© 2025 <a href="https://github.com/Salada-De-Flutter/Kenopsia" className="text-orange-500 hover:text-orange-400">Kenopsia</a> por <a href="https://github.com/Salada-De-Flutter" className="text-orange-500 hover:text-orange-400">Salada de Flutter</a></p>
          <div className="flex justify-center gap-4 mt-4">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Salada-De-Flutter" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-500 hover:text-orange-400"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://discord.com/users/820967650812362772" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-500 hover:text-orange-400"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;