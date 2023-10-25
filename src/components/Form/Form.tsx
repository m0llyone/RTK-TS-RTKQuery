import { ChangeEvent, useContext, useState,useCallback } from "react"
import { Button } from "../common/Button"
import icon from '../../assets/icon.svg'
import { BuyIcon } from "../../assets/ByuIcon"
import { useRef } from "react"
interface IFormInput {
  type:string,
  text:string,
  setText: (text:string) => void
}

const InputForm = ({type,text,setText}:IFormInput) => {
  return (
    <input type={type} value={text} onChange={(e:ChangeEvent<HTMLInputElement>)=>setText(e.target.value)} />
  )
}

export const Form = ():JSX.Element => {
  const [value, setValue] = useState<string>(' ');
  const [change, setChange] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const getStringRef = () => {
    console.log(inputRef.current?.value)
  }

  const clickId = useCallback(
    (id:string):void => {
      console.log(id)
    },
    [])


  return (
    <div>
    <input ref={inputRef}  type="text" placeholder="REF" />
    <input type="text" value={value} onChange={(e:ChangeEvent<HTMLInputElement>) :void => setValue(e.target.value)} />
    <input type="checkbox" checked={change} onChange={():void => setChange(!change)} />
    <InputForm text={text} setText={setText}  type = 'text'/>
    <Button title="Button" onClick={clickId} icon={icon} alt='icon'/>
    <Button onClick={getStringRef} title='Component' buyIcon={<BuyIcon width="20px" height="20px" fill="blue"/>}/>
    </div>
  )
}