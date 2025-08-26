import { LayoutGrid, Notebook, Plus, Sun } from "lucide-react"

const Header = ({toggletheme}) => {
  return (
    <header className='flex justify-between m-4 items-center bg-base-100'>
        <div className="Main flex gap-2 items-center">
            <LayoutGrid className='sm:hidden block items-center' size={30}/>
            <div className="Head flex items-center gap-4">
                <Notebook  size={30}/>
                <div className="Text">
                    <h1 className="text-2xl text-primary font-semibold">Notes Summarizer</h1>
                    <span>Summarize Notes!</span>
                </div>
            </div>
        </div>
        <div className="Other flex items-center gap-2">
            <Sun  onClick={toggletheme}/>
            <button className="sm:flex  p-2 bg-secondary text-white rounded-full hidden">
                <Plus/>
                <span>Login</span>
            </button>
        </div>
    </header>
  )
}

export default Header