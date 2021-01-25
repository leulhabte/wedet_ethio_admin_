import React, { useState } from 'react';
import Header from './Header'
import NewForm from './NewForm';
import { Container, Backdrop, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import SnackBar from '../../partial/SnackBars';
import useStyles from './Styling';
import img from '../../res/g1.jpg';
import Cookies from 'js-cookie';

const NewRestaurant = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhoneNum] = useState({ line1: "", line2: "" });
    const [about, setAboutUs] = useState("");

    // Working Hours
    const [mon, setMon] = useState({ start: "", end: "" });
    const [tues, setTues] = useState({ start: "", end: "" });
    const [wen, setWen] = useState({ start: "", end: "" });
    const [thu, setThu] = useState({ start: "", end: "" });
    const [fri, setFri] = useState({ start: "", end: "" });
    const [sat, setSat] = useState({ start: "", end: "" });
    const [sun, setSun] = useState({ start: "", end: "" });
    // 

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    // Image State
    const imgPicker = React.useRef(null);
    const [image, setImage] = React.useState(img);
    const [fileImage, setFileImage] = useState({});
    const reader = new FileReader(); 
    const _handleImg = (e) => {
            e.preventDefault();
            setImage(URL.createObjectURL(e.target.files[0]));
            setFileImage(e.target.files[0])
        }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // 
    const [zoomlvl, setZoom] = React.useState(15);
    const [pinged, setPinged] = React.useState(false);
    const [latlong, setPos] = React.useState({ lat: 8.9806, lng: 38.7578 });

    const handleZoom = (e) => {
        setZoom(e.target._zoom);
    }

    const handleMap = (e) => {
        setPos({
            lat: e.latlng.lat,
            lng: e.latlng.lng
        });
        setPinged(true);
    }
    // 

    const [stateA, setStateA] = useState({
        checkboxA1: false,
        checkboxA2: false,
        checkboxA3: false,
        checkboxA4: false,
        checkboxA5: false,
    });
    const [stateB, setStateB] = useState({
        checkboxB1: false,
        checkboxB2: false,
        checkboxB3: false,
        checkboxB4: false,
    });
    const [stateC, setStateC] = useState({
        checkboxC1: false,
        checkboxC2: false,
        checkboxC3: false,
        checkboxC4: false,
    });


    // Working Hours ------------------------------------------------------
    const [monFriStart, setMonFriStart] = React.useState({
        hour: 12,
        min: 0,
        zone: "AM"
    })
    const [monFriEnd, setMonFriEnd] = React.useState({
        hour: 12,
        min: 0,
        zone: "PM"
    });

    const [saturdayStart, setSaturdayStart] = React.useState({
        hour: 12,
        min: 0,
        zone: "AM"
    })
    const [saturdayEnd, setSaturdayEnd] = React.useState({
        hour: 12,
        min: 0,
        zone: "PM"
    });

    const [sundayStart, setSundayStart] = React.useState({
        hour: 12,
        min: 0,
        zone: "AM"
    })
    const [sundayEnd, setSundayEnd] = React.useState({
        hour: 12,
        min: 0,
        zone: "PM"
    });


    // Mon Start
    const handleMonFriStartHour = (e) => {
        setMonFriStart({ ...monFriStart, hour: parseInt(e.target.value) })
    }
    const handleMonFriStartMin = (e) => {
        setMonFriStart({ ...monFriStart, min: parseInt(e.target.value) })
    }
    const handleMonFriStartZone = (e) => {
        setMonFriStart({ ...monFriStart, zone: e.target.value })
    }

    // Mon End
    const handleMonFriEndHour = (e) => {
        setMonFriEnd({ ...monFriEnd, hour: parseInt(e.target.value) })
    }
    const handleMonFriEndMin = (e) => {
        setMonFriEnd({ ...monFriEnd, min: parseInt(e.target.value) })
    }
    const handleMonFriEndZone = (e) => {
        setMonFriEnd({ ...monFriEnd, zone: e.target.value })
    }

    // -------------------------------------------------------------

    // Saturday Start
    const handleSaturdayStartHour = (e) => {
        setSaturdayStart({ ...saturdayStart, hour: parseInt(e.target.value) })
    }
    const handleSaturdayStartMin = (e) => {
        setSaturdayStart({ ...saturdayStart, min: parseInt(e.target.value) })
    }
    const handleSaturdayStartZone = (e) => {
        setSaturdayStart({ ...saturdayStart, zone: e.target.value })
    }

    // Saturday End
    const handleSaturdayEndHour = (e) => {
        setSaturdayEnd({ ...saturdayEnd, hour: parseInt(e.target.value) })
    }
    const handleSaturdayEndMin = (e) => {
        setSaturdayEnd({ ...saturdayEnd, min: parseInt(e.target.value) })
    }
    const handleSaturdayEndZone = (e) => {
        setSaturdayEnd({ ...saturdayEnd, zone: e.target.value })
    }

    // -----------------------------------------------------------------

    // Sunday Start
    const handleSundayStartHour = (e) => {
        setSundayStart({ ...sundayStart, hour: parseInt(e.target.value) })
    }
    const handleSundayStartMin = (e) => {
        setSundayStart({ ...sundayStart, min: parseInt(e.target.value) })
    }
    const handleSundayStartZone = (e) => {
        setSundayStart({ ...sundayStart, zone: e.target.value })
    }

    // Sunday End
    const handleSundayEndHour = (e) => {
        setSundayEnd({ ...sundayEnd, hour: parseInt(e.target.value) })
    }
    const handleSundayEndMin = (e) => {
        setSundayEnd({ ...sundayEnd, min: parseInt(e.target.value) })
    }
    const handleSundayEndZone = (e) => {
        setSundayEnd({ ...sundayEnd, zone: e.target.value })
    }

    // --------------------------------------------------------------------
    // --------------------------------------------------------------------

    const handleChangeA = (event) => {
        setStateA({ ...stateA, [event.target.name]: event.target.checked });
    };
    const handleChangeB = (event) => {
        setStateB({ ...stateB, [event.target.name]: event.target.checked });
    };
    const handleChangeC = (event) => {
        setStateC({ ...stateC, [event.target.name]: event.target.checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(fileImage)
            const pattern = /(^(\+251)+|^0)[9][0-9]{8}\b/;
            if(pattern.test(phone.line1) === false){
                throw new Error("Error Phone Number Format")
            }
            if(phone.line2){
                if(pattern.test(phone.line1) === false){
                    throw new Error("Error Phone Number Format")
                }
            }
            // if(JSON.stringify(fileImage) === JSON.stringify({})){
            //     throw new Error("No Image is selected")
            // }
            setOpen2(true);

            // ----------------------------------------------------
            // ----------------------------------------------------
            let monFStartHour;
            let monFEndtHour;
            let saturdayStartHour;
            let saturdayEndHour;
            let sundayStartHour;
            let sundayEndHour;

            // Monday Friday Start Hour
            if (monFriStart.zone === 'PM') {
                if (monFriStart.hour === 12) {
                    monFStartHour = 12;
                } else {
                    monFStartHour = monFriStart.hour + 12;
                }
            }
            else if (monFriStart.zone === 'AM') {
                if (monFriStart.hour === 12) {
                    monFStartHour = 0;
                } else {
                    monFStartHour = monFriStart.hour;
                }
            }
            // -----------------------------

            // Monday Friday End Hour
            if (monFriEnd.zone === 'PM') {
                if (monFriEnd.hour === 12) {
                    monFEndtHour = 12;
                } else {
                    monFEndtHour = monFriEnd.hour + 12;
                }
            }
            else if (monFriEnd.zone === 'AM') {
                if (monFriEnd.hour === 12) {
                    monFEndtHour = 0;
                } else {
                    monFEndtHour = monFriEnd.hour;
                }
            }
            // -----------------------------

            // Saturday Start Hour
            if (saturdayStart.zone === 'PM') {
                if (saturdayStart.hour === 12) {
                    saturdayStartHour = 12;
                } else {
                    saturdayStartHour = saturdayStart.hour + 12;
                }
            }
            else if (saturdayStart.zone === 'AM') {
                if (saturdayStart.hour === 12) {
                    saturdayStartHour = 0;
                } else {
                    saturdayStartHour = saturdayStart.hour;
                }
            }
            // -----------------------------

            // Saturday End Hour
            if (saturdayEnd.zone === 'PM') {
                if (saturdayEnd.hour === 12) {
                    saturdayEndHour = 12;
                } else {
                    saturdayEndHour = saturdayEnd.hour + 12;
                }
            }
            else if (saturdayEnd.zone === 'AM') {
                if (saturdayEnd.hour === 12) {
                    saturdayEndHour = 0;
                } else {
                    saturdayEndHour = saturdayEnd.hour;
                }
            }
            // -----------------------------

            // Sunday Start Hour
            if (sundayStart.zone === 'PM') {
                if (sundayStart.hour === 12) {
                    sundayStartHour = 12;
                } else {
                    sundayStartHour = sundayStart.hour + 12;
                }
            }
            else if (sundayStart.zone === 'AM') {
                if (sundayStart.hour === 12) {
                    sundayStartHour = 0;
                } else {
                    sundayStartHour = sundayStart.hour;
                }
            }
            // -----------------------------

            // Sunday End Hour
            if (sundayEnd.zone === 'PM') {
                if (sundayEnd.hour === 12) {
                    sundayEndHour = 12;
                } else {
                    sundayEndHour = sundayEnd.hour + 12;
                }
            }
            else if (sundayEnd.zone === 'AM') {
                if (sundayEnd.hour === 12) {
                    sundayEndHour = 0;
                } else {
                    sundayEndHour = sundayEnd.hour;
                }
            }
            // -----------------------------

            monFStartHour = parseFloat(monFStartHour + (0.01 * monFriStart.min));
            monFEndtHour = parseFloat(monFEndtHour + (0.01 * monFriEnd.min));

            saturdayStartHour = parseFloat(saturdayStartHour + (0.01 * saturdayStart.min));
            saturdayEndHour = parseFloat(saturdayEndHour + (0.01 * saturdayEnd.min));

            sundayStartHour = parseFloat(sundayStartHour + (0.01 * sundayStart.min));
            sundayEndHour = parseFloat(sundayEndHour + (0.01 * sundayEnd.min));
            // ----------------------------------------------------
            // ----------------------------------------------------

            // Categories
            var _categories = {
                a: stateA.checkboxA1 === true ? 'PSYCHIATRISTS' : "",
                b: stateA.checkboxA2 === true ? 'NEUROLOGISTS' : "",
                c: stateA.checkboxA3 === true ? 'ALLERGISTS' : "",
                d: stateA.checkboxA4 === true ? 'HOLISTIC' : "",
                e: stateB.checkboxB1 === true ? 'MEDICAL_CENTERS' : "",
                f: stateB.checkboxB2 === true ? 'LABORATORY_TESTING' : "",
                g: stateB.checkboxB3 === true ? 'SKIN_CARE' : "",
                h: stateB.checkboxB4 === true ? 'ONCOLOGISTS' : "",
                i: stateC.checkboxC1 === true ? 'URGENT_CARE' : "",
                j: stateC.checkboxC2 === true ? 'CARDIOLOGISTS' : "",
            }


            var main_category = [];

            for (var key in _categories) {
                if (_categories[key] !== "") {
                    main_category.push(_categories[key])
                }
            }

            // ----------------------------
            var a = [];
            for (var x of main_category) {
                var t = `\"${x}\"`;
                a.push(t)
            }
            var category = `[${a.toString()}]`;
            // ----------------------------


            var formData = new FormData();
            formData.append('business', `
            {
                \"del\": \"me\",
                \"name\": \"${name}\",
                \"description\": \"${description}\",
                \"division\": \"HOSPITAL\",
                \"address\": \"${address}\",
                \"phoneNumber\": [\"${phone.line1}\", \"${phone.line2}\"],
                \"aboutUs\": \"\",
                \"workingHour\": {
                    \"mon\": { \"start\": ${monFStartHour}, \"end\": ${monFEndtHour} },
                    \"tue\": { \"start\": ${monFStartHour}, \"end\": ${monFEndtHour} },
                    \"wen\": { \"start\": ${monFStartHour}, \"end\": ${monFEndtHour} },
                    \"thu\": { \"start\": ${monFStartHour}, \"end\": ${monFEndtHour} },
                    \"fri\": { \"start\": ${monFStartHour}, \"end\": ${monFEndtHour} },
                    \"sat\": { \"start\": ${saturdayStartHour}, \"end\": ${saturdayEndHour} },
                    \"sun\": { \"start\": ${sundayStartHour}, \"end\": ${sundayStartHour} }
                  },
                \"location\": { \"type\": \"Point\", \"coordinates\": [${latlong.lat}, ${latlong.lng}] },
                \"categories\": ${category}
              }
            `);
            formData.append('logoPhoto', fileImage);

            const res = await axios.post('/admin/register/business', formData,
                { headers: { 'Authorization': `Bearer ${Cookies.get('jwt')}` } });

            if (res.status === 200) {
                setName("")
                setDescription("")
                setAddress("")
                setPhoneNum({ line1: "", line2: "" })
                setMon({ start: "", end: "" })
                setTues({ start: "", end: "" })
                setWen({ start: "", end: "" })
                setThu({ start: "", end: "" })
                setFri({ start: "", end: "" })
                setSat({ start: "", end: "" })
                setSun({ start: "", end: "" })
                setMessage("Data inserted successfully")
                setMessageType('success')
                setOpen2(false);
                setOpen(true);
            }

        } catch (e) {
            setOpen2(false);
            setMessage(e.message)
            setMessageType('error')
            setOpen(true);
        }
    }
    return (
        <Container style={{ background: '#ECF0F3' }}>
            <Backdrop open={open2} className={classes.backdrop}><CircularProgress /></Backdrop>
            <Header />
            <form onSubmit={handleSubmit}>
                <NewForm
                    stateA={stateA} stateB={stateB} stateC={stateC}
                    handleChangeA={handleChangeA} handleChangeB={handleChangeB} handleChangeC={handleChangeC}
                    name={name} description={description} address={address} phone={phone} about={about}
                    setName={setName} setDescription={setDescription} setAddress={setAddress} setPhoneNum={setPhoneNum} setAboutUs={setAboutUs}
                    setMon={setMon} setTues={setTues} setWen={setWen} setThu={setThu} setFri={setFri} setSat={setSat} setSun={setSun}
                    mon={mon} tues={tues} wen={wen} thu={thu} fri={fri} sat={sat} sun={sun}
                    zoomlvl={zoomlvl} pinged={pinged} latlong={latlong} handleZoom={handleZoom} handleMap={handleMap}
                    imgPicker={imgPicker} image={image} setImage={setImage} _handleImg={_handleImg}
                    monFriStart={monFriStart} monFriEnd={monFriEnd} saturdayStart={saturdayStart} saturdayEnd={saturdayEnd} sundayStart={sundayStart}
                    sundayEnd={sundayEnd}
                    handleMonFriStartHour={handleMonFriStartHour} handleMonFriStartMin={handleMonFriStartMin} handleMonFriStartZone={handleMonFriStartZone}
                    handleMonFriEndHour={handleMonFriEndHour} handleMonFriEndMin={handleMonFriEndMin} handleMonFriEndZone={handleMonFriEndZone}
                    handleSaturdayStartHour={handleSaturdayStartHour} handleSaturdayStartMin={handleSaturdayStartMin} handleSaturdayStartZone={handleSaturdayStartZone}
                    handleSaturdayEndHour={handleSaturdayEndHour} handleSaturdayEndMin={handleSaturdayEndMin} handleSaturdayEndZone={handleSaturdayEndZone}
                    handleSundayStartHour={handleSundayStartHour} handleSundayStartMin={handleSundayStartMin} handleSundayStartZone={handleSundayStartZone}
                    handleSundayEndHour={handleSundayEndHour} handleSundayEndMin={handleSundayEndMin} handleSundayEndZone={handleSundayEndZone}
                />
            </form>
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
        </Container>
    )
}

export default NewRestaurant;