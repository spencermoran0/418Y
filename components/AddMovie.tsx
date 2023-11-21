"use client";

import React, { useState } from "react";
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    UnorderedList,
    List,
    ListItem,
    Text,
    HStack,
    Stack,
    StackDivider,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";

 export default function errorMessageExample() {
    const [input, setInput] = useState('')
  
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setInput(e.target.value)
  
    const isError = input === ''
  
    return (
      <FormControl isInvalid={isError}>
        <FormLabel>Add New Movie</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            Movie Title
          </FormHelperText>
        ) : (
          <FormErrorMessage>Movie Already Added</FormErrorMessage>
        )}
      </FormControl>
    )
  }