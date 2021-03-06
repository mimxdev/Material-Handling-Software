$(document).ready(function () {
  //unfinished booking table
  var dataTable = $('#requested_material_table').DataTable({
    lengthChange: false,
    searching: false,
    processing: true,
    ordering: false,
    serverSide: true,
    bInfo: false,
    ajax: {
      url: './controllers/marlon_unfinishedBookingData.php', // json datasource
      type: 'POST', // method  , by default get
      error: function () {
        // error handling
      },
    },

    createdRow: function (row, data, index) {},
    columnDefs: [{}],
    fixedColumns: false,
    deferRender: true,
    scrollY: 500,
    scrollX: false,
    scroller: {
      loadingIndicator: true,
    },
    stateSave: false,
  });
  // ---------------------------------

  //review materials table
  var review_material_table = $('#review_material_table').DataTable({
    lengthChange: false,
    searching: false,
    processing: true,
    ordering: false,
    serverSide: true,
    bInfo: false,
    ajax: {
      url: './controllers/marlon_reviewMaterialData.php', // json datasource
      type: 'POST', // method  , by default get
      error: function () {
        // error handling
      },
    },

    createdRow: function (row, data, index) {},
    columnDefs: [
      {
        targets: -1,
        data: null,
        defaultContent: '<i class="fa fa-times remove" name="remove"></i>',
      },
    ],
    fixedColumns: false,
    deferRender: true,
    scrollY: 500,
    scrollX: 500,
    scrollCollapse: true,
    scroller: {
      loadingIndicator: true,
    },
    stateSave: false,
  });
  // ---------------------------------
});
