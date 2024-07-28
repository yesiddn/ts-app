// ejemplo del plugin Camera de Capacitor
import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({ // getPhoto recibe unas opciones de tipo ImageOptions en las cuales hay algunas propiedades que usan enums
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri, // CameraResultType es un enum y evita que podamos escribir mal el valor
    direction: CameraDirection.Rear,
  });
};
