import { AlignItems, JustifyContent, KeyboardDismissMode, KeyboardShouldPersistTaps, TextAlign, TextInputAutoCapitalize, TextInputMode, TextVariant } from "../../types";
import { Button, TextInput } from "react-native-paper";
import { Card, FlatList, Group, LazyRender, Row, Text } from "../common-components";
import { a, fn, is, regexp, s } from "typescript-misc";
import { memo, useLang, useStateConfig } from "react-misc";
import Item from "./Item";
import React from "react";
import { View } from "react-native";
import { consts } from "../../core";
import { useIcons } from "../../icons";
import { useThemeExtended } from "../../contexts";
export default memo("IconPicker", ({ getIcon, names, onClose = fn.noop, onSave, selectedName }) => {
    const { NotFoundIcon } = useIcons();
    const { colors } = useThemeExtended();
    const lang = useLang();
    const [localSelectedName, setLocalSelectedName, , localSelectedNameRef] = useStateConfig(() => {
        return {
            initialState: selectedName,
            resetOnInitialStateChange: true
        };
    }, [selectedName]);
    const [search, setSearch] = React.useState("");
    const deferredSearch = React.useDeferredValue(search);
    const filteredNames = React.useMemo(() => {
        const regexps = regexp.matchAll(deferredSearch, /\w+/u).map(([word]) => {
            const lower = word.toLowerCase();
            const upper = s.ucFirst(word);
            // eslint-disable-next-line security/detect-non-literal-regexp -- Ok
            return new RegExp(`(^|[^a-z])${lower}($|[^a-z])|${upper}($|[^a-z])`, "u");
        });
        return regexps.length > 0
            ? names.filter(name => regexps.every(re => re.test(name)))
            : names;
    }, [deferredSearch, names]);
    const initialScrollIndex = React.useMemo(() => is.not.empty(selectedName)
        ? Math.floor(Math.max(filteredNames.findIndex(chunk => chunk.includes(selectedName)), 0) / cols)
        : 0, [filteredNames, selectedName]);
    const clear = React.useCallback(() => {
        setLocalSelectedName(undefined);
    }, [setLocalSelectedName]);
    const getItemLayout = React.useCallback((_data, index) => {
        return {
            index,
            length: cellSize,
            offset: index * cellSize
        };
    }, []);
    const renderItem = React.useCallback(({ item: name }) => (<Item getIcon={getIcon} name={name} onSelect={setLocalSelectedName} selected={name === localSelectedName}/>), [getIcon, localSelectedName, setLocalSelectedName]);
    const save = React.useCallback(() => {
        onSave(localSelectedNameRef.current);
        onClose();
    }, [localSelectedNameRef, onClose, onSave]);
    const placeholder = React.useCallback(() => (<>
          {a
            .chunk(filteredNames.slice(0, rows * cols), cols)
            .map((row, key) => (<Row key={key}>
                {row.map(name => (<Item getIcon={getIcon} key={name} name={name} onSelect={setLocalSelectedName} selected={name === localSelectedNameRef.current}/>))}
              </Row>))}
        </>), [filteredNames, getIcon, localSelectedNameRef, setLocalSelectedName]);
    return (<Card actions={<>
            <Group.ActionButtons start>
              <Button disabled={is.empty(localSelectedName)} onPress={clear} textColor={colors.button.secondary}>
                {lang.Clear}
              </Button>
            </Group.ActionButtons>
            <Group.ActionButtons>
              <Button onPress={save}>{lang.Save}</Button>
            </Group.ActionButtons>
          </>} actionsJustifyContent={JustifyContent.spaceBetween} title={lang.IconPicker}>
        <Group.Sections>
          <TextInput autoCapitalize={TextInputAutoCapitalize.none} autoFocus blurOnSubmit={false} mode={TextInputMode.outlined} onChangeText={setSearch} onSubmitEditing={save} placeholder={lang.TypeYourSearch} style={{ width }} value={search}/>
          {filteredNames.length > 0 ? (<View style={{ height, width }}>
              <LazyRender placeholder={placeholder}>
                <FlatList data={filteredNames} getItemLayout={getItemLayout} height={height} initialScrollIndex={initialScrollIndex} itemMinHeight={cellSize} keyExtractor={fn.identity} keyboardDismissMode={KeyboardDismissMode.none} keyboardShouldPersistTaps={KeyboardShouldPersistTaps.always} numColumns={cols} renderItem={renderItem}/>
              </LazyRender>
            </View>) : (<View style={{
                alignItems: AlignItems.center,
                height,
                justifyContent: JustifyContent.center,
                width
            }}>
              <NotFoundIcon color={colors.fadeMore} size={size}/>
              <Text style={{
                color: colors.secondLine,
                textAlign: TextAlign.center,
                width: widthFactor * width
            }} variant={TextVariant.bodyLarge}>
                {lang.NothingFoundForYourSearch}
              </Text>
            </View>)}
        </Group.Sections>
      </Card>);
});
const { cols, margin, padding, rows, size, widthFactor } = consts.IconPicker;
const cellSize = size + 2 * padding + 2 * margin;
const height = rows * cellSize;
const width = cols * cellSize;
//# sourceMappingURL=index.jsx.map