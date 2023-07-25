export function NavigationBarRoot() {
  return <nav className="md:px-16 md:py-8 flex justify-between px-8 mt-4">
    <h1 className="font-bold text-xl">Sh4re</h1>
    
    <ul className="flex">
      <li className="mx-4">Criar</li>
      <li className="mx-4">Recentes</li>
      <li className="mx-4 mr-0">API</li>
      <li className="mx-4 mr-0">Sobre</li>
    </ul>
  </nav>
}