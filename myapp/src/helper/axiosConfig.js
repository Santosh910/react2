import axios from "axios";
import React from "react";

var Backend

const api = axios.create({baseURL: 'http://localhost:8000/api/v1'})

export default api;

