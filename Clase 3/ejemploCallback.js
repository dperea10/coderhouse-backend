function escribirYLoguear(texto, callbackFuncion) {
  // simulamos que escribimos en un archivo!
  console.log(texto)
  // al finalizar, ejecutamos el callback
  callbackFuncion('archivo escrito con éxito')
}

escribirYLoguear('hola mundo de los callbacks!', (mensajeParaLoguear) => {
  const fecha = new Date().toLocaleDateString()
  console.log(`${fecha}: ${mensajeParaLoguear}`)
})
