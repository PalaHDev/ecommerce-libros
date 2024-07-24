const getImage = (imageName) => {
    switch (imageName) {
      case 'b039af065268818b7bd3b0e016f8db65.jpg':
        return require('../../assets/b039af065268818b7bd3b0e016f8db65.jpg');
      case 'CienAniosDeSoledad.jpg':
        return require('../../assets/CienAniosDeSoledad.jpg');
      case 'DeAnimalesADioses.jpg':
        return require('../../assets/DeAnimalesADioses.jpg');
      case 'ElHobbit.jpg':
        return require('../../assets/ElHobbit.jpg');
      case 'HarryPotterYLaPiedraFilosofal.jpg':
        return require('../../assets/HarryPotterYLaPiedraFilosofal.jpg');
      case 'ElOrigenDeLasEspecies.jpg':
        return require('../../assets/ElOrigenDeLasEspecies.jpg');
      case 'InteoduccionALaProgramacionEnPython.jpg':
        return require('../../assets/InteoduccionALaProgramacionEnPython.jpg');
      case 'HistoriaDelArte.jpg':
        return require('../../assets/HistoriaDelArte.jpg');
      case 'FotografiaDigital.jpg':
        return require('../../assets/FotografiaDigital.jpg');
      case 'ElManualDelEmprendedor.jpg':
        return require('../../assets/ElManualDelEmprendedor.jpg');
      case 'FinanzasPersonales.jpg':
        return require('../../assets/FinanzasPersonales.jpg');
      case 'RedesDeComputadoras.jpg':
        return require('../../assets/RedesDeComputadoras.jpg');
      case 'IntroduccionALaProgramacion.jpg':
        return require('../../assets/IntroduccionALaProgramacion.jpg');
      case 'AlimentacionSaludable.jpg':
        return require('../../assets/AlimentacionSaludable.jpg');
      case '9789878999920.webp':
        return require('../../assets/9789878999920.webp');
      case 'CocinaVeganaParaPrincipiantes.jpg':
        return require('../../assets/CocinaVeganaParaPrincipiantes.jpg');
      case 'RecetasDelChef.jpg':
        return require('../../assets/RecetasDelChef.jpg');
      case 'GiaDeViajesAEuropa.webp':
        return require('../../assets/GiaDeViajesAEuropa.webp');
      case 'AventuraEnPqtagonia.jpg':
        return require('../../assets/AventuraEnPqtagonia.jpg');
        case 'EntrenamientoDeFuerza.jpg':
        return require('../../assets/EntrenamientoDeFuerza.jpg');
        case 'YogaParaTodos.jpg':
        return require('../../assets/YogaParaTodos.jpg');
        case 'MatematicaParaLaVida.jpg':
        return require('../../assets/MatematicaParaLaVida.jpg');
      default:
        return { uri: imageName };
    }
  };
  export default getImage;