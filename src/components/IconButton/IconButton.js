

export default function IconButton({
    children = null,
    onClick = () => null,
    ...otherProps
  }) {
    return (
      <button
        type="button"
        // className={styles.button}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    );
  }