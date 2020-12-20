import checkFloatValue from '../../handlers/validators/checkFloatValue';
import initSettings from '../../handlers/basicSettings/initSettings';
import calculate from './calculate.js';
import render from './render.js';

initSettings.checkFloatValue = checkFloatValue;
initSettings.calculate = calculate;
initSettings.render = render;

Internet.Interactive.init(initSettings);