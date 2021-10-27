import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import * as contactsApi from '../../Api/contactsApi';

export const fetchContacts = createAsyncThunk(
    "app/fetchContacts",
    async (_, { rejectWithValue }) => {
      try {
        const contact = await contactsApi.fetchContacts();
        return contact;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);


export const addContacts = createAsyncThunk(
    "app/add",
    async (value, { rejectWithValue }) => {
      try {
        const contact = await contactsApi.saveContact(value);
        return contact;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);


export const deleteContacts = createAsyncThunk(
    "app/delete",
    async (value, { rejectWithValue }) => {
      try {
        const contact = await contactsApi.deleteContact(value);
        return contact;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);


export const filterContacts = createAction("app/filter");