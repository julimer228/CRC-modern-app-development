import { render, screen} from '@testing-library/react';
import { expect, afterEach, describe, expectTypeOf, assertType, assert } from 'vitest';
import Register from "./pages/register/Register"
import { Link, Router, useNavigate, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

describe('Register test', () => {
    it('it tests registration site', () => {
      render(
      <BrowserRouter>
          <Register/>
      </BrowserRouter>
    
      );
      screen.debug();
    });
  });