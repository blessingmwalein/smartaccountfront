<template>
    <div>
        <slot />
        <snackbar ref="snackbar" baseSize="100px" :wrapClass="''" :colors="null" :holdTime="3000" :multiple="true"/>
    </div>
</template>