import {FC} from 'react'

interface IButtonProps {
  title:string,
  onClick?: (id:string) => void,
  icon?:string,
  alt?: string,
  buyIcon?: React.ReactNode
}

export const Button: FC<IButtonProps> = ({title, onClick,icon,alt,buyIcon}) => {

  const getID = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(onClick){
      onClick(e.currentTarget.id)
    }
  }

  return(
    <button id='id' onClick={getID}>
    <span>{title}</span>
    {icon ? <img src={icon} alt={alt}/>: buyIcon }
    </button>
  )
}