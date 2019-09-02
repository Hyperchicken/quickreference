$( function() {
    var projects = [
      {
        value: "jquery",
        label: "jQuery",
        desc: "the write less, do more, JavaScript library",
        icon: "jquery_32x32.png"
      },
      {
        value: "jquery-ui",
        label: "jQuery UI",
        desc: "the official user interface library for jQuery",
        icon: "jqueryui_32x32.png"
      },
      {
        value: "sizzlejs",
        label: "Sizzle JS",
        desc: "a pure-JavaScript CSS selector engine",
        icon: "sizzlejs_32x32.png"
      }
    ];
    var data = [
        {
            value: "",
            label: "Changing Ends",
            desc: "Time Allowances",
            content: "<h3>Changing Ends Walking Time</h3>"
                + "<ul>"
                + "<li>3-car: 4min</li>"
                + "<li>6-car: 5min</li>"
                + "</ul>"
        },
        {
            value: "",
            label: "Peruse Notice Boards at FSS",
            desc: "Time Allowances",
            content: "<h3>Time allowance to Peruse Notice Boards at FSS</h3>"
                + "<ul>"
                + "<li>3 minutes during meal break</li>"
                + "</ul>"
        },
        {
            value: "",
            label: "Bayswater (BAY)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Bayswater</h3>"
                + "<ul><li>Walk to Sidings: 5 min</li>"
                + "<li>Shunt/Dock to/from Sidings: 2 min</li>"
                + "</ul>"
        },
        {
            value: "",
            label: "Belgrave (BEG)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Belgrave</h3>"
            + "<ul><li>Walk to Sidings: 2 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 2 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Brighton Beach (BBH)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Brighton Beach</h3>"
            + "<ul><li>Walk to Sidings: 10 min [UP end: 6 min]</li>"
            + "<li>Shunt/Dock to/from Sidings: 7 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Broadmeadows (BMS)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Broadmeadows</h3>"
            + "<ul><li>Walk to Sidings: 11 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 4 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Burnley (BLY)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Burnley</h3>"
            + "<ul><li>Walk to Sidings: 23 min</li>"
            + "<li>Walk Tram Stop No.18 to Sidings: 10 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 5 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Burnley Sidings (BLS)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Burnley Sidings</h3>"
            + "<ul><li>Walk to Sidings: 23 min</li>"
            + "<li>Walk Tram Stop No.18 to Sidings: 10 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 5 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Camberwell (CAM)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Camberwell</h3>"
            + "<ul><li>Walk to Sidings: 5 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 7 min</li>"
            + "<li>Shunt/Dock to/from Sidings via Riversdale (RIV): 12 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Calder Park Sidings (CPS)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Calder Park Sidings</h3>"
            + "<ul><li>Walk to Sidings: 10 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Carrum (CAR)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Carrum</h3>"
            + "<ul><li>Walk to Sidings: 11 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 4 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Craigieburn (CGB)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Craigieburn</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Cranbourne (CBE)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Cranbourne</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Dandenong (DNG)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Dandenong</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Eltham (ELT)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Eltham</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Epping (EPP)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Epping</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "fkn-walk",
            label: "Frankston (FKN)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Frankton</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Glen Waverley (GWY)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Glen Waverley</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Hurstbridge (HBE)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Hurstbridge</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Lilydale (LIL)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Lilydale</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Macaulay Sidings (MSS)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Macaulay Sidings</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Macleod (MCD)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Macleod</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Melbourne Yard (MYD)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Melbourne Yard</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Mordialloc (MOR)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Mordialloc</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Newport (NPT)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Newport</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Newport Sidings (NPS)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Newport Sidings</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "North Melbourne Sidings (NMS)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for North Melbourne Sidings</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Pakenham (PKM)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Pakenham</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Ringwood (RWD)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Ringwood</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Sandringham (SHM)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Sandringham</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "Lay-By Sidings (LBY)",
            label: "Bayswater ()",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Lay-By Sidings</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Sunbury (SUY)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Sunbury</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Victoria Park (VPK)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Victoria Park</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Watergardens (WGS)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Watergardens</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "Westall (WTL)",
            desc: "Time Allowances",
            content: "<h3>Time Allowances for Westall</h3>"
            + "<ul><li>Walk to Sidings: 0 min</li>"
            + "<li>Shunt/Dock to/from Sidings: 0 min</li>"
            + "</ul>"
        },
        {
            value: "",
            label: "",
            desc: "",
            content: "<h3></h3>"
                + "<ul>"
                + "<li></li>"
                + "</ul>"
        },
      ];
 
    $( "#project" ).autocomplete({
      minLength: 1,
      source: data,
      focus: function( event, ui ) {
        //$( "#project" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#project" ).val( ui.item.label );
        $( "#project-id" ).val( ui.item.value );
        $( "#project-description" ).html( ui.item.content );
        //$( "#project-icon" ).attr( "src", "images/" + ui.item.icon );
 
        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<div>" + item.label + "<br><span class='subtext'>" + item.desc + "</span></div>" )
        .appendTo( ul );
    };
});