import React, {useState} from 'react';
import { Checkbox, FormControlLabel, FormGroup, Box } from '@material-ui/core';

const CheckBoxes = () => {
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
    return (
        <Box display="flex" flexDirection="row" width="90%" justifyContent="space-between">
            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BURGER"
                                checked={stateA.checkboxA1}
                                onChange={handleChangeA}
                                name="checkboxA1"
                            />
                        }
                        label="Burger"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="PIZZA"
                                checked={stateA.checkboxA2}
                                onChange={handleChangeA}
                                name="checkboxA2"
                            />
                        }
                        label="Pizza"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CAFE"
                                checked={stateA.checkboxA3}
                                onChange={handleChangeA}
                                name="checkboxA3"
                            />
                        }
                        label="Cafe"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="SEA_FOOD"
                                checked={stateA.checkboxA4}
                                onChange={handleChangeA}
                                name="checkboxA4"
                            />
                        }
                        label="SeaFood"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BUTCHERY"
                                checked={stateA.checkboxA5}
                                onChange={handleChangeA}
                                name="checkboxA5"
                            />
                        }
                        label="Butchery"
                    />
                </FormGroup>
            </Box>
            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="ICECREAM "
                                checked={stateA.checkboxB1}
                                onChange={handleChangeB}
                                name="checkboxB1"
                            />
                        }
                        label="Ice Cream"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="Bakeries"
                                checked={stateA.checkboxA2}
                                onChange={handleChangeA}
                                name="checkboxA2"
                            />
                        }
                        label="Bakeries"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="Smothie"
                                checked={stateA.checkboxA3}
                                onChange={handleChangeA}
                                name="checkboxA3"
                            />
                        }
                        label="Smothie"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="Cultural"
                                checked={stateA.checkboxA4}
                                onChange={handleChangeA}
                                name="checkboxA4"
                            />
                        }
                        label="Cultural"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="Arab"
                                checked={stateA.checkboxA5}
                                onChange={handleChangeA}
                                name="checkboxA5"
                            />
                        }
                        label="Arab"
                    />
                </FormGroup>
            </Box>

            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="Chinese"
                                checked={stateA.checkboxA1}
                                onChange={handleChangeA}
                                name="checkboxA1"
                            />
                        }
                        label="Chinese"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="Indian"
                                checked={stateA.checkboxA2}
                                onChange={handleChangeA}
                                name="checkboxA2"
                            />
                        }
                        label="Indian"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="Chinese"
                                checked={stateA.checkboxA3}
                                onChange={handleChangeA}
                                name="checkboxA3"
                            />
                        }
                        label="Chinese"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="Italiy"
                                checked={stateA.checkboxA4}
                                onChange={handleChangeA}
                                name="checkboxA4"
                            />
                        }
                        label="Italiy"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BUTCHERY"
                                checked={stateA.checkboxA5}
                                onChange={handleChangeA}
                                name="checkboxA5"
                            />
                        }
                        label="Butchery"
                    />
                </FormGroup>
            </Box>

            {/* ----------------------------------------------------- */}

            <Box>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BURGER"
                                checked={stateA.checkboxA1}
                                onChange={handleChangeA}
                                name="checkboxA1"
                            />
                        }
                        label="Burger"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="PIZZA"
                                checked={stateA.checkboxA2}
                                onChange={handleChangeA}
                                name="checkboxA2"
                            />
                        }
                        label="Pizza"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="CAFE"
                                checked={stateA.checkboxA3}
                                onChange={handleChangeA}
                                name="checkboxA3"
                            />
                        }
                        label="Cafe"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="SEA_FOOD"
                                checked={stateA.checkboxA4}
                                onChange={handleChangeA}
                                name="checkboxA4"
                            />
                        }
                        label="SeaFood"
                    />
                </FormGroup>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="BUTCHERY"
                                checked={stateA.checkboxA5}
                                onChange={handleChangeA}
                                name="checkboxA5"
                            />
                        }
                        label="Butchery"
                    />
                </FormGroup>
            </Box>
        </Box>
    )
}

export default CheckBoxes;