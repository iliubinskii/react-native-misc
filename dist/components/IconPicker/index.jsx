"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const types_1 = require("../../types");
const react_native_paper_1 = require("react-native-paper");
const common_components_1 = require("../common-components");
const typescript_misc_1 = require("typescript-misc");
const react_misc_1 = require("react-misc");
const Item_1 = tslib_1.__importDefault(require("./Item"));
const react_1 = tslib_1.__importDefault(require("react"));
const react_native_1 = require("react-native");
const core_1 = require("../../core");
const icons_1 = require("../../icons");
const contexts_1 = require("../../contexts");
exports.default = (0, react_misc_1.memo)("IconPicker", ({ getIcon, names, onClose = typescript_misc_1.fn.noop, onSave, selectedName }) => {
    const { NotFoundIcon } = (0, icons_1.useIcons)();
    const { colors } = (0, contexts_1.useThemeExtended)();
    const lang = (0, react_misc_1.useLang)();
    const [localSelectedName, setLocalSelectedName, , localSelectedNameRef] = (0, react_misc_1.useStateConfig)(() => {
        return {
            initialState: selectedName,
            resetOnInitialStateChange: true
        };
    }, [selectedName]);
    const [search, setSearch] = react_1.default.useState("");
    const deferredSearch = react_1.default.useDeferredValue(search);
    const filteredNames = react_1.default.useMemo(() => {
        const regexps = typescript_misc_1.regexp.matchAll(deferredSearch, /\w+/u).map(([word]) => {
            const lower = word.toLowerCase();
            const upper = typescript_misc_1.s.ucFirst(word);
            // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
            return new RegExp(`(^|[^a-z])${lower}($|[^a-z])|${upper}($|[^a-z])`, "u");
        });
        return regexps.length > 0
            ? names.filter(name => regexps.every(re => re.test(name)))
            : names;
    }, [deferredSearch, names]);
    const initialScrollIndex = react_1.default.useMemo(() => typescript_misc_1.is.not.empty(selectedName)
        ? Math.floor(Math.max(filteredNames.findIndex(chunk => chunk.includes(selectedName)), 0) / cols)
        : 0, [filteredNames, selectedName]);
    const clear = react_1.default.useCallback(() => {
        setLocalSelectedName(undefined);
    }, [setLocalSelectedName]);
    const getItemLayout = react_1.default.useCallback((_data, index) => {
        return {
            index,
            length: cellSize,
            offset: index * cellSize
        };
    }, []);
    const renderItem = react_1.default.useCallback(({ item: name }) => (<Item_1.default getIcon={getIcon} name={name} onSelect={setLocalSelectedName} selected={name === localSelectedName}/>), [getIcon, localSelectedName, setLocalSelectedName]);
    const save = react_1.default.useCallback(() => {
        onSave(localSelectedNameRef.current);
        onClose();
    }, [localSelectedNameRef, onClose, onSave]);
    const placeholder = react_1.default.useCallback(() => (<>
          {typescript_misc_1.a
            .chunk(filteredNames.slice(0, rows * cols), cols)
            .map((row, key) => (<common_components_1.Row key={key}>
                {row.map(name => (<Item_1.default getIcon={getIcon} key={name} name={name} onSelect={setLocalSelectedName} selected={name === localSelectedNameRef.current}/>))}
              </common_components_1.Row>))}
        </>), [filteredNames, getIcon, localSelectedNameRef, setLocalSelectedName]);
    return (<common_components_1.Card actions={<>
            <common_components_1.Group.ActionButtons start>
              <react_native_paper_1.Button disabled={typescript_misc_1.is.empty(localSelectedName)} onPress={clear} textColor={colors.button.secondary}>
                {lang.Clear}
              </react_native_paper_1.Button>
            </common_components_1.Group.ActionButtons>
            <common_components_1.Group.ActionButtons>
              <react_native_paper_1.Button onPress={save}>{lang.Save}</react_native_paper_1.Button>
            </common_components_1.Group.ActionButtons>
          </>} actionsJustifyContent={types_1.JustifyContent.spaceBetween} title={lang.IconPicker}>
        <common_components_1.Group.Sections>
          <react_native_paper_1.TextInput autoCapitalize={types_1.TextInputAutoCapitalize.none} autoFocus blurOnSubmit={false} mode={types_1.TextInputMode.outlined} onChangeText={setSearch} onSubmitEditing={save} placeholder={lang.TypeYourSearch} style={{ width }} value={search}/>
          {filteredNames.length > 0 ? (<react_native_1.View style={{ height, width }}>
              <common_components_1.LazyRender placeholder={placeholder}>
                <common_components_1.FlatList data={filteredNames} getItemLayout={getItemLayout} height={height} initialScrollIndex={initialScrollIndex} itemMinHeight={cellSize} keyExtractor={typescript_misc_1.fn.identity} keyboardDismissMode={types_1.KeyboardDismissMode.none} keyboardShouldPersistTaps={types_1.KeyboardShouldPersistTaps.always} numColumns={cols} renderItem={renderItem}/>
              </common_components_1.LazyRender>
            </react_native_1.View>) : (<react_native_1.View style={{
                alignItems: types_1.AlignItems.center,
                height,
                justifyContent: types_1.JustifyContent.center,
                width
            }}>
              <NotFoundIcon color={colors.fadeMore} size={size}/>
              <common_components_1.Text style={{
                color: colors.secondLine,
                textAlign: types_1.TextAlign.center,
                width: widthFactor * width
            }} variant={types_1.TextVariant.bodyLarge}>
                {lang.NothingFoundForYourSearch}
              </common_components_1.Text>
            </react_native_1.View>)}
        </common_components_1.Group.Sections>
      </common_components_1.Card>);
});
const { cols, margin, padding, rows, size, widthFactor } = core_1.consts.IconPicker;
const cellSize = size + 2 * padding + 2 * margin;
const height = rows * cellSize;
const width = cols * cellSize;
//# sourceMappingURL=index.jsx.map