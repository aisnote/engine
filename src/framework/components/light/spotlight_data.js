pc.extend(pc.fw, function () {
    function SpotLightComponentData() {
        // Serialized
        this.enable = true;
        this.color = "0xffffff";
        this.intensity = 1;
        this.castShadows = false;
        this.attenuationEnd = 1;
        this.outerConeAngle = 45;

        // Non-serialized
        this.light = null;
    };

    SpotLightComponentData.extendsFrom(pc.fw.ComponentData);

    return {
        SpotLightComponentData: SpotLightComponentData
    };
}());
editor.link.addComponentType("spotlight");

editor.link.expose({
    system: "spotlight",
    variable: "enable",
    displayName: "Enable",
    description: "Enable or disable the light",
    type: "boolean",
    defaultValue: true
});

editor.link.expose({
    system: "spotlight",
    variable: "color",
    displayName: "Color",
    description: "Light color",
    type: "string",
    defaultValue: "0xffffff"
});

editor.link.expose({
    system: "spotlight",
    variable: "intensity",
    displayName: "Intensity",
    description: "Factors the light color",
    type: "number",
    defaultValue: 1,
    options: {
        min: 0,
        max: 10,
        step: 0.05
    }
});

editor.link.expose({
    system: "spotlight",
    variable: "castShadows",
    displayName: "Cast shadows",
    description: "Cast shadows from this light",
    type: "boolean",
    defaultValue: false
});

editor.link.expose({
    system: "spotlight",
    variable: "attenuationEnd",
    displayName: "Attenuation End",
    description: "The distance from the light where its contribution falls to zero",
    type: "number",
    defaultValue: 1,
    options: {
        min: 0
    }
});

editor.link.expose({
    system: "spotlight",
    variable: "outerConeAngle",
    displayName: "Cone Angle",
    description: "Spotlight cone angle",
    type: "number",
    defaultValue: 45,
    options: {
        min: 0,
        max: 90
    }
});