const circles = document.querySelectorAll('.circle')
const header_p_1 = document.getElementById('header-p-1')
const header_p_2 = document.getElementById('header-p-2')
const header = document.querySelector('.header')


circles.forEach(item => {

    item.addEventListener('click', () => {
        
        if(item.id == "elemental")
        {
            let p1 = "<b>Calidad de Software:</b> Es la medida de la capacidad de un producto de software para cumplir con los requisitos y expectativas de los usuarios y las partes interesadas, así como para cumplir con los estándares y normas de calidad. La calidad del software se refiere a las características que se desean en un software, como la fiabilidad, la eficiencia, la facilidad de uso, la seguridad y la capacidad de ser mantenido y mejorado."

            let p2 = ""
            
            set_description(p1, p2)
            change_sheep()
        }
        else if(item.id == "first")
        {
            let p1 = "<b>Funcionabilidad:</b> Es el conjunto de características que permiten al software satisfacer las necesidades y expectativas del usuario. En este sentido, la funcionalidad es un elemento fundamental que se relaciona con subelementos como la adecuación (el software cumple con las necesidades del usuario), precisión (el software produce resultados precisos) y seguridad (el software protege los datos y la información del usuario)."

            let p2 = ""
            
            set_description(p1, p2)
            change_sheep()
        }
        else if(item.id == "second")
        {
            let p1 = "<b>Fiabilidad:</b> Se refiere a la capacidad del software de mantener un nivel de funcionamiento adecuado durante un período de tiempo determinado y bajo diferentes condiciones de uso. Este elemento se relaciona con la madurez (el software es capaz de funcionar sin errores), la tolerancia a fallos (el software es capaz de manejar errores y recuperarse de ellos) y la disponibilidad (el software está disponible cuando el usuario lo necesita)."

            let p2 = ""
            
            set_description(p1, p2)
            change_sheep()
        }
        else if(item.id == "third")
        {
            let p1 = "<b>Mantenibilidad:</b> Se refiere a la capacidad del software de ser modificado, mejorado y corregido con facilidad y eficacia. Este elemento se relaciona con la capacidad de analizar el código (el software es fácil de entender y analizar), la estabilidad (el software no se ve afectado por cambios y mejoras) y la modularidad (el software se puede dividir en módulos que se pueden modificar de manera independiente)."

            let p2 = ""
            
            set_description(p1, p2)
            change_sheep()
        }

        // sub-first
        else if(item.id == "sub-first-1")
        {
            let p1 = "<b>Funcionabilidad:</b> Es el conjunto de características que permiten al software satisfacer las necesidades y expectativas del usuario. En este sentido, la funcionalidad es un elemento fundamental que se relaciona con subelementos como la adecuación (el software cumple con las necesidades del usuario), precisión (el software produce resultados precisos) y seguridad (el software protege los datos y la información del usuario)."

            let p2 = "<b>Interoperabilidad:</b> La capacidad del software para interactuar con otros sistemas o aplicaciones."
            
            set_description(p1, p2)
            change_sheep()
        }
        else if(item.id == "sub-first-2")
        {
            let p1 = "<b>Funcionabilidad:</b> Es el conjunto de características que permiten al software satisfacer las necesidades y expectativas del usuario. En este sentido, la funcionalidad es un elemento fundamental que se relaciona con subelementos como la adecuación (el software cumple con las necesidades del usuario), precisión (el software produce resultados precisos) y seguridad (el software protege los datos y la información del usuario)."

            let p2 = "<b>Usabilidad:</b> La facilidad de uso del software para los usuarios finales."
            
            set_description(p1, p2)
            change_sheep()
        }

        // sub-second
        else if(item.id == "sub-second-1")
        {
            let p1 = "<b>Fiabilidad:</b> Se refiere a la capacidad del software de mantener un nivel de funcionamiento adecuado durante un período de tiempo determinado y bajo diferentes condiciones de uso. Este elemento se relaciona con la madurez (el software es capaz de funcionar sin errores), la tolerancia a fallos (el software es capaz de manejar errores y recuperarse de ellos) y la disponibilidad (el software está disponible cuando el usuario lo necesita)."

            let p2 = "<b>Capacidad de recuperación:</b> La habilidad del software para recuperarse de errores y continuar con su funcionamiento normal."
            
            set_description(p1, p2)
            change_sheep()
        }
        else if(item.id == "sub-second-2")
        {
            let p1 = "<b>Fiabilidad:</b> Se refiere a la capacidad del software de mantener un nivel de funcionamiento adecuado durante un período de tiempo determinado y bajo diferentes condiciones de uso. Este elemento se relaciona con la madurez (el software es capaz de funcionar sin errores), la tolerancia a fallos (el software es capaz de manejar errores y recuperarse de ellos) y la disponibilidad (el software está disponible cuando el usuario lo necesita)."

            let p2 = "<b>Tolerancia a Fallos:</b> La capacidad del software de seguir funcionando en situaciones donde existen fallas o errores en el sistema."
            
            set_description(p1, p2)
            change_sheep()
        }

        // sub-third
        else if(item.id == "sub-third-1")
        {
            let p1 = "<b>Mantenibilidad:</b> Se refiere a la capacidad del software de ser modificado, mejorado y corregido con facilidad y eficacia. Este elemento se relaciona con la capacidad de analizar el código (el software es fácil de entender y analizar), la estabilidad (el software no se ve afectado por cambios y mejoras) y la modularidad (el software se puede dividir en módulos que se pueden modificar de manera independiente)."

            let p2 = "<b>Portabilidad:</b> La capacidad del software para ser movido a diferentes plataformas de hardware o sistemas operativos sin perder funcionalidad."
            
            set_description(p1, p2)
            change_sheep()
        }
        else if(item.id == "sub-third-2")
        {
            let p1 = "<b>Mantenibilidad:</b> Se refiere a la capacidad del software de ser modificado, mejorado y corregido con facilidad y eficacia. Este elemento se relaciona con la capacidad de analizar el código (el software es fácil de entender y analizar), la estabilidad (el software no se ve afectado por cambios y mejoras) y la modularidad (el software se puede dividir en módulos que se pueden modificar de manera independiente)."

            let p2 = "<b>Escalabilidad:</b> La capacidad del software para manejar un mayor volumen de datos o usuarios sin degradar su desempeño."
            
            set_description(p1, p2)
            change_sheep()
        }
    })
})

function set_description(p1, p2)
{
    header_p_1.innerHTML = p1
    header_p_2.innerHTML = p2
}

function change_sheep()
{
    var height = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, height);

    animation_sheep()
}

function animation_sheep()
{
    header.style.marginLeft = "100%"
    setTimeout(()=>{

        header.style.marginLeft = "0%"
    }, 500)
}