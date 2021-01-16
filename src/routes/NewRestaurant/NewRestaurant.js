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
    const reader = new FileReader()
;    const _handleImg = (e) => {
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
        checkboxA1: true,
        checkboxA2: true,
        checkboxA3: true,
        checkboxA4: true,
        checkboxA5: true,
    });
    const [stateB, setStateB] = useState({
        checkboxB1: true,
        checkboxB2: true,
        checkboxB3: true,
        checkboxB4: true,
    });
    const [stateC, setStateC] = useState({
        checkboxC1: true,
        checkboxC2: true,
        checkboxC3: true,
        checkboxC4: true,
    });
    const [stateD, setStateD] = useState({
        checkboxD1: true,
        checkboxD2: true,
        checkboxD3: true,
        checkboxD4: true,
    });
    const [stateE, setStateE] = useState({
        checkboxE1: true,
        checkboxE2: true,
        checkboxE3: true,
        checkboxE4: true,
    });
    const [stateF, setStateF] = useState({
        checkboxF1: true,
        checkboxF2: true,
        checkboxF3: true,
        checkboxF4: true,
    });
    const [stateG, setStateG] = useState({
        checkboxG1: true,
        checkboxG2: true,
        checkboxG3: true,
        checkboxG4: true,
    });
    const [stateZ, setStateZ] = useState({
        checkboxZ1: true,
        checkboxZ2: true,
        checkboxZ3: true,
        checkboxZ4: true,
        checkboxZ5: true,
    });

    const handleChangeZ = (event) => {
        setStateZ({ ...stateZ, [event.target.name]: event.target.checked });
    };

    const handleChangeA = (event) => {
        setStateA({ ...stateA, [event.target.name]: event.target.checked });
    };
    const handleChangeB = (event) => {
        setStateB({ ...stateB, [event.target.name]: event.target.checked });
    };
    const handleChangeC = (event) => {
        setStateC({ ...stateC, [event.target.name]: event.target.checked });
    };
    const handleChangeD = (event) => {
        setStateD({ ...stateD, [event.target.name]: event.target.checked });
    };
    const handleChangeE = (event) => {
        setStateE({ ...stateE, [event.target.name]: event.target.checked });
    };
    const handleChangeF = (event) => {
        setStateF({ ...stateF, [event.target.name]: event.target.checked });
    };
    const handleChangeG = (event) => {
        setStateG({ ...stateG, [event.target.name]: event.target.checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setOpen2(true);

            var lists = {
                a: stateZ.checkboxZ1 === true ? 'FAST_FOOD' : "",
                b: stateZ.checkboxZ2 === true ? 'BREAKFAST' : "",
                c: stateZ.checkboxZ3 === true ? 'FRENCH' : "",
                d: stateZ.checkboxZ4 === true ? 'DINNER' : "",
                e: stateZ.checkboxZ5 === true ? 'DINNER' : "",
            }

            var main_category = [];

            for (var key in lists) {
                if (lists[key] !== "") {
                    main_category.push(lists[key])
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
                \"division\": \"RESTAURANT\",
                \"address\": \"${address}\",
                \"phoneNumber\": [\"${phone.line1}\", \"${phone.line2}\"],
                \"type\": [\"FAMILY\",  \"SPORT\"],
                \"aboutUs\": \"\",
                \"workingHour\": {
                    \"mon\": { \"start\": ${parseInt(mon.start)}, \"end\": ${parseInt(mon.end)} },
                    \"tue\": { \"start\": ${parseInt(tues.start)}, \"end\": ${parseInt(tues.end)} },
                    \"wen\": { \"start\": ${parseInt(wen.start)}, \"end\": ${parseInt(wen.end)} },
                    \"thu\": { \"start\": ${parseInt(thu.start)}, \"end\": ${parseInt(thu.end)} },
                    \"fri\": { \"start\": ${parseInt(fri.start)}, \"end\": ${parseInt(fri.end)} },
                    \"sat\": { \"start\": ${parseInt(sat.start)}, \"end\": ${parseInt(sat.end)} },
                    \"sun\": { \"start\": ${parseInt(sun.start)}, \"end\": ${parseInt(sun.end)} }
                  },
                \"services\": [\"GOOD_FOR_KIDS\", \"TAKES_RESERVATION\", \"WI_FI\"],
                \"location\": { \"type\": \"Point\", \"coordinates\": [38.7497422, 9.1715608] },
                \"categories\": ${category}
              }
            `);
            formData.append('logoPhoto',fileImage);
            
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
            <Backdrop open={open2} className={classes.backdrop}><CircularProgress/></Backdrop>
            <Header />
            <form onSubmit={handleSubmit}>
                <NewForm
                    stateA={stateA} stateB={stateB} stateC={stateC} stateD={stateD} stateE={stateE} stateF={stateF} stateG={stateG} stateZ={stateZ}
                    handleChangeA={handleChangeA} handleChangeB={handleChangeB} handleChangeC={handleChangeC} handleChangeD={handleChangeD}
                    handleChangeE={handleChangeE} handleChangeF={handleChangeF} handleChangeG={handleChangeG} handleChangeZ={handleChangeZ}
                    name={name} description={description} address={address} phone={phone} about={about}
                    setName={setName} setDescription={setDescription} setAddress={setAddress} setPhoneNum={setPhoneNum} setAboutUs={setAboutUs}
                    setMon={setMon} setTues={setTues} setWen={setWen} setThu={setThu} setFri={setFri} setSat={setSat} setSun={setSun}
                    mon={mon} tues={tues} wen={wen} thu={thu} fri={fri} sat={sat} sun={sun}
                    zoomlvl={zoomlvl} pinged={pinged} latlong={latlong} handleZoom={handleZoom} handleMap={handleMap}
                    imgPicker={imgPicker} image={image} setImage={setImage} _handleImg={_handleImg}

                />
            </form>
            <SnackBar handleClose={handleClose} open={open} message={message} type={messageType} />
        </Container>
    )
}

export default NewRestaurant;