a = "background-color: # 00ffff; color: # ff00ff; "
a += "font-size: 24pt; font-family: 'Times New Roman'"
naim = 'Мережа магазинів "ВСЕ ДЛЯ ДОМУ"'
var da = new Date ()
d = da.getDate () + "." + (da.getMonth () + 1) + "." + da.getFullYear ()
document.write ( '<P align = center style = "' + a + '">' +
naim + '</P> <P> Сьогодні ' + d + '</P>')