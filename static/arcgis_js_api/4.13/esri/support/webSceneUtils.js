// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.13/esri/copyright.txt for details.
//>>built
define(["require","exports","../core/Error"],function(d,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.createCopyError=function(){return new c("webscene:failed-to-copy-embedded-resources","Copying of embedded resources is currently not supported")};b.isCopyError=function(a){return a&&"webscene:failed-to-copy-embedded-resources"===a.name};b.createSchemaValidationError=function(a){return new c("webscene:schema-validation","Failed to save webscene due to schema validation errors. See 'details.errors' for more detailed information",
{errors:a})};b.isSchemaValidationError=function(a){return a&&"webscene:schema-validation"===a.name}});