import "./WorkList.scss"

export default function WorksList({id,title, setSelected, active}) {
  return (
    <li className={active ? "portfolioList active":"portfolioList"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
