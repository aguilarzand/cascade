  $(document).ready(function(){
    let arrData = [];
    //Se llena la primera lista desplegable: 
    $.getJSON('birds.json', function (data) {
        let arr_bird_type = [];
        $.each(data, function (index, value) {
            arr_bird_type.push(value.Type);
            arrData = data;
        });
        //Se remueven elementos duplicados
        arr_bird_type = Array.from(new Set (arr_bird_type));

        //Se rellena la 1a lista desplegable con el contenido variable-valor:
        $.each(arr_bird_type, function (index, value) {
            $('#sel').append('<option value="' + value + '">' + value + '</option>');
        });
    });
    //Se rellena el segundo elemento select:
    $('#sel').change(function () {
        let type = this.options[this.selectedIndex].value;

        let filterData = arrData.filter(function(value) {
            return value.Type === type;
        });

        $('#sel1')
            .empty()
            .append('<option value=""> -- Select Bird -- </option>');

        $.each(filterData, function (index, value) {
            //Llenar la segunda lista con los valores guardados:
            $('#sel1').append('<option value="' + value.ID + '">' + value.Name + '</option>');
        });
    });
  });
