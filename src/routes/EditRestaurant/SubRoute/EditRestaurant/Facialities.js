import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Box } from '@material-ui/core';

const Facualities = () => {
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
    return (
        <Box display="flex" flexDirection="row" width="90%" justifyContent="space-between">
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            value="BURGER"
                            checked={stateZ.checkboxZ1}
                            onChange={handleChangeZ}
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
                            checked={stateZ.checkboxZ2}
                            onChange={handleChangeZ}
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
                            checked={stateZ.checkboxZ3}
                            onChange={handleChangeZ}
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
                            checked={stateZ.checkboxZ4}
                            onChange={handleChangeZ}
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
                            checked={stateZ.checkboxZ5}
                            onChange={handleChangeZ}
                            name="checkboxA5"
                        />
                    }
                    label="Butchery"
                />
            </FormGroup>
        </Box>
    )

}

export default Facualities;