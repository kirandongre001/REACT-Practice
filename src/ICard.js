export default function ICard(props){
    let {name,dob,phone}=props.obj
    return(
        <div style={{border:"3px double black ", width:"300px", backgroundColor:"grey", color:"white"}}>
            <p>Name:{name}</p>
            <p>DOB:{dob}</p>
            <p>PHONE:{phone}</p>
        </div>
    )
}