import Filho from './Filho'


export default function Pai(props) {

   return (
      <div>
         <Filho nome="Silas" familia={props.familia} />
         <Filho nome="Paulo" familia={props.familia} />
         <Filho nome="Simon" familia={props.familia} />
         <Filho nome="Denis" {...props} />  {/* <Filho {...props} nome="Denis" /> */}
      </div>
   )
}
