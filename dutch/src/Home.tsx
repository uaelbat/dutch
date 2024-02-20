import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { TextArea } from './components/TextArea'
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const toContent = () => {
    navigate("/content");
  };

  return (
    <div className='h-full grid grid-rows-9'>
      <div className='flex justify-center my-auto row-span-3'>
        <Button children='はじめる' shapeType='ellipse' onClick={toContent}></Button>
      </div>
      <div className='relative row-span-6'>
        <div className='absolute inset-x-0 -top-6 mx-auto w-1/3'>
          <Badge children='説明'></Badge>
        </div>
        <div className='h-full mx-3'>
          <TextArea children='埋め込みテキスト'></TextArea>
        </div>
      </div>
    </div>
  )
}

export default Home
