import { Button } from "./components/ui/button"
import { Card } from "./components/ui/Card"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  return <div className="p-4">
    <div className="flex justify-end gap-4">
         <Button variant="primary" text="Add content"startIcon={<PlusIcon/>}></Button>
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
    </div>
   <div className="flex">


    

   
   <Card type="twitter" link="https://x.com/FabrizioRomano/status/2005304096778252426" 
   title="First Tweet"/>
    <Card type="youtube" link="https://www.youtube.com/watch?v=BSATK8sL4yw" 
   title="First video"/>
   </div>
  
  </div>
  
}

export default App
