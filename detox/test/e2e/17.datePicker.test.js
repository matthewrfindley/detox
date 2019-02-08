describe(':ios: DatePicker', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.text('DatePicker')).tap();
  });

  it('datePicker should trigger change handler correctly', async () => {
    await element(by.type('UIPickerView')).setDatePickerDateIOSOnly('2019-2-8T05:10:00-08:00', "yyyy-MM-dd'T'HH:mm:ssZZZZZ");
    //await element(by.type('UIPickerView')).setDatePickerDateIOSOnly(1,"6");

    //    await element(by.type('UIPickerView')).setColumnToValue(1, '6');
    //  await element(by.type('UIPickerView')).setColumnToValue(2, '34');
    await expect(element(by.id('timeLabel'))).toHaveText('choosenTime is 2-8-2019 6:34');
  });
});
