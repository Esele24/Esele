export function ChatList({img, name, ind}){
    return(
        <div style={{display:"flex", alignItems: "center"}}>
            <img style={{borderRadius:"50%", width:"70px", margin:"5px"}}></img>
            <label>{name}</label>
            <div>{ind}</div> 
        </div>
    );
}