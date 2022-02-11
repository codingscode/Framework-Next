

export default function NumeroDisplay(props) {


   return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
           height: '80px', width: '80px', borderRadius: '40px', backgroundColor: '#222', 
           color: '#fff', fontSize: '3rem', margin: '20px' }} >
         {props.numero}      
      </div>
   )
}

