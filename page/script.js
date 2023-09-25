// Créez un objet associatif (dictionnaire) pour stocker les emplacements et leurs coefficients
const coefficients = {
"l1" : -32351.3707222316,
"l2" : -10374.3441698603,
"l3" : -217506.737924718,
"l4" : 310289.291922246,
"l5" : -122957.359730351,
"l6" : -216318.580910705,
"l7" : -85992.2006231298,
"l8" : -23449.1734666128,
"l9" : -65765.7598419096,
"l10" : -109186.782877254,
"l11" : -38955.3902700709,
"l12" : 181023.014900568,
"l13" : -63496.6243534854,
"l14" : -116045.827102323,
"l15" : -94124.1106546466,
"l16" : -31931.8129126322,
"l17" : -38074.9599709345,
"l18" : -2908.90115029229,
"l19" : -190525.79070517,
"l20" : -206006.282125373,
"l21" : -138075.383508701,
"l22" : -93636.0809944129,
"l23" : 52699.8887663492,
"l24" : 87159.7630709923,
"l25" : -179463.143834601,
"l26" : -133411.166455993
};

const typeprops = {
"t1" : 25026.3348500376,
"t2" : -30076.1853521996,
"t3" : -59135.8393688162,
"t4" : -72982.3708287342,
"t5" : 0.000000
    // Ajoutez d'autres années avec leurs valeurs ici
};

const valuesByYears = {
"y1" : -120630.460364905,
"y2" : -85983.3506291368,
"y3" : -70362.6073704462,
"y4" : -61297.4320609625,
"y5" : -52231.4183186526,
"y6" : -35027.7856147705,
"y7" : -22088.6011603481,
"y8" : -5406.75712893376,
"y9" : 7774.42770527411,
"y10" : 14856.093940406,
"y11" : 22279.2150858931,
"y12" : 24916.00182729,
"y13" : 28395.1596068186,
"y14" : 31927.7788395691,
"y15" : 37482.4921834503,
"y16" : 48128.7359966685,
"y17" : 59033.8342235387,
"y18" : 90300.2064719141,
"y19" : 148242.872428479,
"y20" : 202970.247285577,
"y21" : 213322.962988366
    // Ajoutez d'autres années avec leurs valeurs ici
};

const poolselect = {
"pool1":-884.74383867556,
"pool2":46274.7610924963,
"pool3":0
};
const garselect = {
"gar1":65888.3443996046,
"gar2":21845.2778429125,
"gar3":0
};

const basementselect = {
"basement1":-709.713404038711,
"basement2":0
};

const brickselect = {
"brick1":2477.14946669967,
"brick2":0
};



const stoneselect = {
"stone1":26336.3705461671,
"stone2":0
};


const ceramicselect = {
"ceramic1":2110.39898085532,
"ceramic2":0
};

const hardwoodselect = {
"hardwood1":16434.0724223408,
"hardwood2":0
};





const highwayselect = {
"highway1":-219.165218211259,
"highway2":0
};

const nobackselect = {
"noback1":12221.9317676858,
"noback2":0
};

const residentialselect = {
"residential1":3241.32668402427,
"residential2":0
};

const publictselect = {
"publict1":-6620.56278392007,
"publict2":0
};


// Attachez un gestionnaire d'événements au formulaire pour gérer la soumission
document.getElementById('property-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get field values
    const propertyType = document.getElementById('property-type').value;
    const squareFeet = parseFloat(document.getElementById('square-feet').value);
    const bedNumber = parseFloat(document.getElementById('number-bed').value);
    const bathNumber = parseFloat(document.getElementById('number-bath').value);
    const seNumber = parseFloat(document.getElementById('number-se').value);
    const landNumber = parseFloat(document.getElementById('land').value);
 const ageNumber = parseFloat(document.getElementById('age').value);
    const selectedLocation = document.getElementById('location').value;
    const selectedYear = document.getElementById('year').value;

 
   const selectedpool = document.getElementById('pool').value;
const selectedgar = document.getElementById('gar').value;
const selectedbasement = document.getElementById('basement').value;
const selectedbrick = document.getElementById('brick').value;
const selectedstone = document.getElementById('stone').value;
const selectedceramic = document.getElementById('ceramic').value;
const selectedhardwood = document.getElementById('hardwood').value;
 const selectedhighway = document.getElementById('highway').value;
 const selectednoback = document.getElementById('noback').value;
const selectedresidential = document.getElementById('residential').value;
 const selectedpublict = document.getElementById('publict').value;

 
    // Use coefficient based on chosen location
    const coefficient = coefficients[selectedLocation] || 0; // Use 0 if location isn't found

    const typeprop = typeprops[propertyType] || 0; // Use 0 if property type isn't found

    // Use value based on chosen year
    const valueByYear = valuesByYears[selectedYear] || 0; // Use 0 if year isn't found


const valuebypool=poolselect[selectedpool]|| 0; // Use 0 if year isn't found
const valuebygar=garselect[selectedgar]|| 0; // Use 0 if year isn't found
const valuebybasement=basementselect[selectedbasement]|| 0; // Use 0 if year isn't found
const valuebybrick=brickselect[selectedbrick]|| 0; // Use 0 if year isn't found
const valuebystone=stoneselect[selectedstone]|| 0; // Use 0 if year isn't found
const valuebyceramic=ceramicselect[selectedceramic]|| 0; // Use 0 if year isn't found
const valuebyhighway=highwayselect[selectedhighway]|| 0; // Use 0 if year isn't found
const valuebynoback=nobackselect[selectednoback]|| 0; // Use 0 if year isn't found
const valuebyresidential=residentialselect[selectedresidential]|| 0; // Use 0 if year isn't found
const valuebypublict=publictselect[selectedpublict]|| 0; // Use 0 if year isn't found
const valuebyhardwood=hardwoodselect[selectedhardwood]|| 0; // Use 0 if year isn't found


 
   // Calculate based on property type, coefficient, and value by year
let result = coefficient + typeprop + valueByYear + valuebypool + valuebygar + valuebybasement + valuebybrick + valuebystone + valuebyceramic + valuebyhighway + valuebynoback + valuebyresidential + valuebypublict + valuebyhardwood;

// Display the result in the designated area
const resultDiv = document.getElementById('result');
resultDiv.textContent = `The estimated cost of the property is $${result.toFixed(2)}`;
});
