import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Box } from '@material-ui/core';

const Facualities = ({stateZ, handleChangeZ }) => {
    return (
        <Box display="flex" flexDirection="row" width="90%" justifyContent="space-between">
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            value="FAST_FOOD"
                            checked={stateZ.checkboxZ1}
                            onChange={handleChangeZ}
                            name="checkboxZ1"
                        />
                    }
                    label="FAST_FOOD"
                />
            </FormGroup>

            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            value="BREAKFAST"
                            checked={stateZ.checkboxZ2}
                            onChange={handleChangeZ}
                            name="checkboxZ2"
                        />
                    }
                    label="BREAKFAST"
                />
            </FormGroup>

            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            value="FRENCH"
                            checked={stateZ.checkboxZ3}
                            onChange={handleChangeZ}
                            name="checkboxZ3"
                        />
                    }
                    label="FRENCH"
                />
            </FormGroup>

            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            value="DINNER"
                            checked={stateZ.checkboxZ4}
                            onChange={handleChangeZ}
                            name="checkboxZ4"
                        />
                    }
                    label="DINNER"
                />
            </FormGroup>

            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            value="BUTCHERY"
                            checked={stateZ.checkboxZ5}
                            onChange={handleChangeZ}
                            name="checkboxZ5"
                        />
                    }
                    label="BUTCHERY"
                />
            </FormGroup>
        </Box>
    )

}

export default Facualities;