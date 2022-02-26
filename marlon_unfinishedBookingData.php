<?php
require("includes/marlon_connection.php");

$sql = "SELECT * FROM system_bookingtransferrequest WHERE status = 0";
$requestedBooking = $connection->query($sql);

$data = [];
$totalData = 0;
while($result = $requestedBooking->fetch_assoc())
{
    $sql = "SELECT * FROM engineering_booking WHERE bookingStatus = 0 AND bookingId = '".$result['bookingId']."'";
    $bookingStatus = $connection->query($sql);
    $result = mysqli_fetch_array($bookingStatus);
    extract($result);

     $data[] = [
        $bookingId,
        $inventoryId,
        $bookingQuantity
    ];
    $totalData++;

}

$json_data = array(
    "draw"            => 1,   // for every request/draw by clientside , they send a number as a parameter, when they recieve a response/data they first check the draw number, so we are sending same number in draw. 
    "recordsTotal"    => intval($totalData),  // total number of records
    "recordsFiltered" => intval($totalData), // total number of records after searching, if there is no searching then totalFiltered = totalData
    "data"            => $data   // total data array
);
echo json_encode($json_data);  // send data as json format
?>