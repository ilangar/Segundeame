/* 
********** PREGUNTAR A TOTO **********

VIDEO CON JS:

hamburgeroff: {
    
    //va algo que no me interesa
}

hamburgeron: {
     //va algo que no me interesa
}

menuoff: {
    possition: "fixed"
    width: "100%"
    height: "100vh"
    background: ""
    transform: "translatex(100%)"
    transition: "all 0.5s ease-in-out"
}

menuon:{
    possition: "fixed"
    width: "100%"
    height: "100vh"
    background: ""
    transform: "translatex(20%)"
    transition: "all 0.5s ease-in-out"
}

ul:{
    listStyleType: "none"
}

export default function noimporta () {
    const [active,setActive] = useState(false) 
    return(
        <div onClick={() => setActive(!active)} >
            <div {active ? classes.hamburgeron : classes.hamburgeroff}>
                <img src="/menu-hamburguesa.png" alt="menu hamburguesa" />
            </div>
            <div classeName= {active ? classes.menuon : classes.menuoff}>
                <ul classeName={classes.ul}>
                    <li><a href="./materiales">Perfil</a></li>
                    <li>IA</li>
                    <li>Ong</li>
                    <li>Foto</li>
                    <li>ayuda</li>
                </ul>
            </div>

        </div>
        
    )
}

CHAT GPT:



*/


