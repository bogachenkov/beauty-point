import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import m from 'moment';

import { DatePicker } from "@material-ui/pickers";
import deepPurple from "@material-ui/core/colors/deepPurple"
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { selectDate } from '../../store/actions';

import './style.scss';

const materialTheme = createMuiTheme({
  palette: {
    primary: deepPurple
  }
});

const DatePanel = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.selectedDate);

  const [isOpen, setIsOpen] = useState(false);
  
  let currentMonth =  m().month();

  return (
    <div className="date-panel">
      {
        new Array(14).fill('a').map((span, i) => {
          const date =  m().add(i, 'd');
          let newMonth = false;

          if (currentMonth !== date.month()) {
            newMonth = true;
            currentMonth = date.month();
          }

          return (
            <React.Fragment key={date.date()}>
              { newMonth && <p className="date-panel--month">{ date.format('MMM') }</p>}
              <button onClick={() => dispatch(selectDate(date))} className={`date-panel--item${date.isSame(selectedDate, 'day') ? ' date-panel--item-active' : ''}`}>
                <span className="date-panel--weekday">{ date.format('dd') }</span>
                {date.date()}
              </button>
            </React.Fragment>
          );
        })
      }
      <button onClick={() => setIsOpen(true)} className="date-panel--calendar">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19"><g><g><path fill="#8d43ff" d="M16.615 9.84H13.5V6.785h3.115zm0 4.07H13.5v-3.392h3.115zm0 3.733H13.5v-3.054h3.115zm-4.05-12.654a.322.322 0 0 1-.103-.239V1.697c0-.092.034-.172.103-.239a.34.34 0 0 1 .246-.1h.697a.34.34 0 0 1 .245.1.322.322 0 0 1 .103.239V4.75a.322.322 0 0 1-.103.239.34.34 0 0 1-.245.1h-.697a.339.339 0 0 1-.246-.1zm.243 4.85H9.346V6.786h3.462zm0 4.072H9.346v-3.393h3.462zm0 3.732H9.346v-3.054h3.462zM8.654 9.839H5.192V6.786h3.462zm0 4.072H5.192v-3.393h3.462zm0 3.732H5.192v-3.054h3.462zM4.258 4.989a.321.321 0 0 1-.104-.239V1.697c0-.092.035-.172.104-.239a.34.34 0 0 1 .245-.1H5.2a.34.34 0 0 1 .245.1.322.322 0 0 1 .104.239V4.75a.322.322 0 0 1-.104.239.34.34 0 0 1-.245.1h-.697a.34.34 0 0 1-.245-.1zm.242 4.85H1.385V6.786H4.5zm0 4.072H1.385v-3.393H4.5zm0 3.732H1.385v-3.054H4.5zM17.59 3.117a1.343 1.343 0 0 0-.974-.403H15.23V1.696c0-.466-.17-.865-.508-1.198A1.684 1.684 0 0 0 13.5 0h-.692c-.476 0-.883.166-1.222.498-.34.333-.509.732-.509 1.198v1.018H6.923V1.696c0-.466-.17-.865-.508-1.198A1.684 1.684 0 0 0 5.192 0H4.5c-.476 0-.883.166-1.222.498a1.618 1.618 0 0 0-.509 1.198v1.018H1.385c-.375 0-.7.135-.974.403A1.292 1.292 0 0 0 0 4.072v13.571c0 .367.137.685.411.954.274.269.599.403.974.403h15.23c.375 0 .7-.134.974-.403s.411-.587.411-.954V4.072c0-.368-.137-.686-.41-.955z"/></g></g></svg>
      </button>
      <ThemeProvider theme={materialTheme}>
        <DatePicker
          //variant="inline"
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          TextFieldComponent={() => null}
          autoOk={true}
          value={selectedDate}
          onChange={date => dispatch(selectDate(date))}
        />
      </ThemeProvider>
    </div>
  );
};

export default DatePanel;