<?php
$accidents=array() ;
if(($handle = fopen("accident.csv", "r")) !== false) { 
 if(($data = fgetcsv($handle, 1000, ",")) !== false) { 
 $keys = $data; // save as keys
 }
 while(($accident = fgetcsv($handle, 1000, ",")) !== false) { 
 $donneesAccident = array_combine($keys, $accident);
 if($donneesAccident["dep"]==37){
     $accidentGeoJsonItem = array(); 
 
 $accidentGeoJson["type"]="Feature";
 $accidentGeoJson["geometry"]["type"]="Point";
 $accidentGeoJson["geometry"]["coordinates"]=array((float)$donneesAccident["long"],(float)
$donneesAccident["lat"]);
 $accidentGeoJson["properties"]["NuméroVehicules"] =$donneesAccident["numVehicules"];
 $accidentGeoJson["properties"]["Gravité"] =$donneesAccident["grav"];
 $accidentGeoJson["properties"]["Catégorie"] =$donneesAccident["typevehicules"];
 $accidentGeoJson["properties"]["Age"] =$donneesAccident["age"];
 $accidentGeoJson["properties"]["équipement de sécurité"] =$donneesAccident["equipement"];
 $accidentGeoJson["properties"]["Motif du déplacement"] =$donneesAccident["trajet"];
 $accidents[]=$accidentGeoJson;
 }
 
 }
 fclose($handle); 
}
$contenus=[
    "type"=>"FeatureCollection",
    "features"=> $accidents
];

file_put_contents("accidentsfiltres.json", json_encode($contenus,TRUE)); 
