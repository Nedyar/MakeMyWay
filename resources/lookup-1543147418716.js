(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Nuevo_Destino",
    "30f08601-b5f8-4752-a5b9-ff71da616ecf": "mi_ruta",
    "179f9822-b36a-45f2-8eef-a1c7e9a0abfe": "mi_ruta_cambiada",
    "11344ca1-f739-42d1-a9a6-f30207256f2d": "Screen 1",
    "3893652c-ac08-4abf-8fd5-448938410e2a": "Fechas y Presupuesto",
    "9810bd7b-fdbe-4881-9b22-db24e2f2a605": "Seleccionar Destino",
    "8168e8b0-e142-4342-ae0c-3abff97e5b5e": "SegundaPrincipal",
    "f682ed64-65b9-4d2b-87ad-d80a80581739": "ScreenPrincipal",
    "79256c9f-57b1-4fa2-a00d-5b2d690ea255": "Mostrar_Ruta",
    "0ad0a397-f90c-433d-b3cc-370d3f39f505": "Screen2",
    "96b983ff-3b50-483f-9b9f-f7ee219f266e": "Screen",
    "02c5d0b1-6e95-4d6b-8623-1b8185357641": "mi_ruta_add",
    "e53ca1a5-3da4-42c6-a2ff-78c0e40f3f45": "Vacia",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Plantilla",
    "4fd5f0af-2a36-4e2f-88ef-4a1cc0e61a54": "Plantilla3",
    "293f402d-7c52-40e9-95d2-f8212f32e7e8": "Mi ruta",
    "cd478ae6-da52-48a3-bf79-72206c493419": "Plantilla2",
    "226ddec7-9f2f-469c-8d33-c31994594372": "Plantilla_Principal",
    "4a546311-f918-4987-83f3-e39796b8a88b": "Mi rutaCambiada",
    "65c681f6-d3fa-4637-8eea-15ab74a1ac8d": "Mi rutaAdd",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);