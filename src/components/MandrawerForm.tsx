'use client'

import { Button } from '@/components/button'
import { Checkbox, CheckboxField } from '@/components/checkbox'
import { Divider } from '@/components/divider'
import { Description, Field, FieldGroup, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { Select } from '@/components/select'
import { useState } from 'react'
import React from "react";

export default function MandrawerForm() {

    return (
        <>
                <div className="mt-6 pt-6">Request Anvil Information</div>
                <div className="font-normal mb-3">
                    Enter your email address and select which Anvil you want to drop on somebody. <br /><br />We&apos;ll get back to you toot-sweet.
                </div>
                <Divider />
                <div className="mt-2">
                    <FieldGroup>
                        <Field>
                            <Label>Email</Label>
                            <Input name="email" defaultValue="name@email.com" placeholder="name@email.com" autoFocus />
                        </Field>
                        <Field>
                            <Label>Model of Anvil</Label>
                            <Select name="model" defaultValue="">
                                <option value="" disabled>
                                    Select a model&hellip;
                                </option>
                                <option value="SuperSteel">SuperSteel</option>
                                <option value="BigBertha">BigBertha</option>
                                <option value="HeavyBevy">HeavyBevy</option>
                                <option value="other">Other</option>
                            </Select>
                        </Field>
                        <CheckboxField>
                            <Checkbox name="notify" />
                            <Label>Count me in!</Label>
                            <Description>Do you want a complimentary can of our best paint so you can draw that tunnel on the wall?</Description>
                        </CheckboxField>
                    </FieldGroup>
                </div>
                <div className="mt-4 flex align-middle items-center">
                    <Button className="mr-3">
                        Cancel
                    </Button>
                    <Button >Submit</Button>
                </div>

        </>
    )
}
