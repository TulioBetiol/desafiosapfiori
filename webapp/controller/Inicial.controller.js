sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("googleimagem.controller.Inicial", {
            onInit: function () {
               let ImageList = {
                    Imagens : [ ]
            
               
                    };

                    let ImageModel = new JSONModel(ImageList);
                    let view = this.getView();
            
                    view.setModel(ImageModel, "ModeloImagem");
                 
            },

            onPressBuscar: function(){
                   let inputBusca = this.byId("inpBusca");
                   let query = inputBusca.getValue();

                   const settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q="
                   + query
                   +"&pageNumber=1&pageSize=10&autoCorrect=true",
                    "method": "GET",
                    "headers": {
                        "X-RapidAPI-Key": "13d7dc06d1msha5deac26ea14457p1252f2jsnc958e6b29070",
                        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
                    }
                };
                
                $.ajax(settings).done(function (response) {
                    console.log(response);

                    let oImageModel = this.getView().getModel("ModeloImagem");
                    let oDadosImage = oImageModel.getData();

                    oDadosImage.Imagens = [];

                    let listaResultados = response.value;
                    let newItem;

                    for (var i=0; i < listaResultados.length; i++){

                        newItem = listaResultados[í];

                        oDadosImage.Imagens.push(newItem);

                    }


                    oImageModel.refresh();

                }.bind (this)
                );




            }



        });





    });

