export interface BaseModel {
  readonly id: string; // de esta forma solo se podra leer y en caso de modificar la propiedad, saltará una alerta
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
