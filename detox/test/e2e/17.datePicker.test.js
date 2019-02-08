describe(':ios: DatePicker', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('DatePicker')).tap();
  });

  it('datePicker should trigger change handler correctly', async () => {
    await element(by.type('UIDatePicker')).setDatePickerDateIOSOnly('2019-02-06T05:10:00-08:00', "yyyy-MM-dd'T'HH:mm:ssZZZZZ");

    /* await element(by.type('UIPickerView')).setColumnToValue(0, 'Feb 9');
     * await element(by.type('UIPickerView')).setColumnToValue(1, '5');
     * await element(by.type('UIPickerView')).setColumnToValue(2, '10'); */
    await expect(element(by.id('timeLabel'))).toHaveText('choosenTime is 2-6-2019 5:10');
  });
});
