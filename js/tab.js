/**
 * Created by Martynas on 2017-05-11.
 */
function showTab(tabid) {
    var sheet1 = document.getElementById("sheet1");
    var sheet2 = document.getElementById("sheet2");
    var sheet3 = document.getElementById("sheet3");

    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");

    switch (tabid) {
        case 1:
            console.log("tab1");
            sheet1.style.display="block";
            sheet2.style.display="none";
            sheet3.style.display="none";

            tab1.className="tab active";
            tab2.className="tab";
            tab3.className="tab";
            break;

        case 2:
            console.log("tab2");
            sheet1.style.display="none";
            sheet2.style.display="block";
            sheet3.style.display="none";

            tab1.className="tab";
            tab2.className="tab active";
            tab3.className="tab";
            break;
        case 3:
            console.log("tab3");
            sheet1.style.display="none";
            sheet2.style.display="none";
            sheet3.style.display="block";

            tab1.className="tab";
            tab2.className="tab";
            tab3.className="tab active";
            break;
    }

}