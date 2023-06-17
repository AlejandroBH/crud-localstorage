'use strict';

import { inputDescription, inputImage, inputName } from "../main.js";

// funcion para generar tarjetas con informacion aleatoria (solo debug)
export const randomSet = (active) => {
    const randomName = [
        'Titulo Florencia',
        'Titulo Luisa',
        'Titulo Rosario',
        'Titulo Gaspar',
        'Titulo Marcelo',
        'Titulo Tato',
        'Titulo Gerardo',
        'Titulo Marcos',
        'Titulo Tomas',
        'Titulo Gimanez',
        'Titulo Maria',
        'Titulo Victor',
    ];
    
    const randomImage = [
        'https://i.pinimg.com/564x/c0/2f/16/c02f160d233f14499c4b04855cbb0587.jpg',
        'https://i.pinimg.com/564x/02/a4/6a/02a46a4cd1060252fa3df3ae7a8d1031.jpg',
        'https://i.pinimg.com/564x/98/50/21/9850218a384991e329c2fbd8e04ced4e.jpg',
        'https://i.pinimg.com/564x/dd/f0/77/ddf0777a33861660fae05348e70ebb05.jpg',
        'https://i.pinimg.com/564x/72/46/7d/72467d43d6eebcc0655228476cdde8b6.jpg',
        'https://www.aulafacil.com/uploads/cursos/3089/editor/agriculture-84698_640.es.jpg',
        'https://is3-ssl.mzstatic.com/image/thumb/Music5/v4/2a/b7/61/2ab7615b-a091-a203-77b4-4bd348ac1efd/885686597088.jpg/600x600bf-60.jpg',
        'https://cdns-images.dzcdn.net/images/cover/fc68f1082a6ce2f912886bb4b2d2a561/500x500.jpg',
    ];

    const randomDescription = [
        'La historia principal sigue a Naruto y al crecimiento individual de sus amigos, junto a su desarrollo como ninja. Además, se centra en las interacciones entre estos y la influencia del entorno en sus personalidades.',
        'Gracias al conocimiento de Orochimaru, Kabuto utiliza un jutsu prohibido llamado Edo Tensei creado por el segundo hokage y revive a ninjas famosos para utilizarlos en la guerra que se avecina, mientras que la Alianza Shinobi (alianza de todas las aldeas) se prepara de igual manera.',
        'Naruto tiene un gran número de personajes que, en su mayoría, se distinguen por ser ninjas. Al principio estudian en la Academia Ninja, para luego ser divididos en tríos Genin (grupo de ninjas novatos), a los cuales se les es asignado un sensei experimentado.',
        'La gran mayoría de los personajes introducidos en la serie son ninjas provenientes de las distintas aldeas y facciones que aparecen en la historia. Los protagonistas pertenecen a la Aldea Oculta de la Hoja y la historia, si bien no gira en torno a ellos, es narrada mayormente con base en sus aventuras.',
        'Kishimoto agregó que, debido a que Naruto ocurre en un «mundo imaginario japonés», tuvo que «poner ciertas reglas a través de un modelo sistemático para poder hacer que la historia progresara fácilmente». Además, aseguró que había introducido a la astrología china, ya que esta tiene una larga influencia en Japón; a la misma se deben los sellos de mano zodiacales.',
    ];

    if (active) {
        let mrName = Math.floor(Math.random()*randomName.length);
        let mrImage = Math.floor(Math.random()*randomImage.length);
        let mrDescription = Math.floor(Math.random()*randomDescription.length);
    
        inputName.value = randomName[mrName];
        inputImage.value = randomImage[mrImage];
        inputDescription.value = randomDescription[mrDescription];
    } else {
        return false;
    }
}