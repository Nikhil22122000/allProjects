import React, { useState } from 'react';

function ScientificCalculator() {
    const [display, setDisplay] = useState('0');
    const [previous, setPrevious] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForNewValue, setWaitingForNewValue] = useState(false);
    const [history, setHistory] = useState([]);

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f0f0',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        },
        calculatorWrapper: {
            display: 'flex',
            gap: '20px',
            maxWidth: '900px',
        },
        mainCalculator: {
            backgroundColor: '#1e1e1e',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            width: '350px',
        },
        title: {
            color: '#fff',
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
        },
        display: {
            backgroundColor: '#2d2d2d',
            color: '#00ff00',
            fontSize: '28px',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'right',
            marginBottom: '15px',
            minHeight: '50px',
            wordWrap: 'break-word',
            wordBreak: 'break-all',
            fontFamily: 'Courier New, monospace',
            fontWeight: 'bold',
        },
        buttonGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            marginBottom: '15px',
        },
        button: {
            padding: '15px',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            backgroundColor: '#404040',
            color: '#fff',
        },
        buttonHover: {
            backgroundColor: '#505050',
            transform: 'scale(1.05)',
        },
        operationButton: {
            backgroundColor: '#ff9500',
            color: '#fff',
        },
        functionButton: {
            backgroundColor: '#00aaff',
            color: '#fff',
        },
        equalsButton: {
            backgroundColor: '#34c759',
            color: '#fff',
            gridColumn: 'span 2',
        },
        clearButton: {
            backgroundColor: '#ff3b30',
            color: '#fff',
        },
        historyPanel: {
            backgroundColor: '#2d2d2d',
            borderRadius: '15px',
            padding: '20px',
            width: '250px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            maxHeight: '500px',
            overflowY: 'auto',
        },
        historyTitle: {
            color: '#fff',
            marginBottom: '15px',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        historyItem: {
            color: '#00ff00',
            padding: '8px',
            backgroundColor: '#1e1e1e',
            borderRadius: '5px',
            marginBottom: '8px',
            fontSize: '12px',
            fontFamily: 'Courier New, monospace',
            wordBreak: 'break-all',
        },
        clearHistoryButton: {
            width: '100%',
            padding: '8px',
            backgroundColor: '#ff3b30',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
            fontWeight: 'bold',
        },
    };

    const handleNumber = (num) => {
        if (waitingForNewValue) {
            setDisplay(String(num));
            setWaitingForNewValue(false);
        } else {
            setDisplay(display === '0' ? String(num) : display + num);
        }
    };

    const handleDecimal = () => {
        if (waitingForNewValue) {
            setDisplay('0.');
            setWaitingForNewValue(false);
        } else if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const handleOperation = (op) => {
        const currentValue = parseFloat(display);

        if (previous === null) {
            setPrevious(currentValue);
        } else if (operation && !waitingForNewValue) {
            const result = calculate(previous, currentValue, operation);
            setDisplay(String(result));
            setPrevious(result);
        }

        setOperation(op);
        setWaitingForNewValue(true);
    };

    const calculate = (prev, current, op) => {
        switch (op) {
            case '+':
                return prev + current;
            case '-':
                return prev - current;
            case '*':
                return prev * current;
            case '/':
                return prev / current;
            case 'mod':
                return prev % current;
            case 'pow':
                return Math.pow(prev, current);
            default:
                return current;
        }
    };

    const handleEquals = () => {
        if (operation && previous !== null) {
            const currentValue = parseFloat(display);
            const result = calculate(previous, currentValue, operation);
            const expression = `${previous} ${operation} ${currentValue} = ${result}`;
            setHistory([expression, ...history]);
            setDisplay(String(result));
            setPrevious(null);
            setOperation(null);
            setWaitingForNewValue(true);
        }
    };

    const handleScientificFunction = (func) => {
        let result;
        const value = parseFloat(display);

        switch (func) {
            case 'sin':
                result = Math.sin((value * Math.PI) / 180);
                break;
            case 'cos':
                result = Math.cos((value * Math.PI) / 180);
                break;
            case 'tan':
                result = Math.tan((value * Math.PI) / 180);
                break;
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'ln':
                result = Math.log(value);
                break;
            case 'abs':
                result = Math.abs(value);
                break;
            case 'factorial':
                result = factorial(value);
                break;
            case 'reciprocal':
                result = 1 / value;
                break;
            case 'square':
                result = value * value;
                break;
            case 'cube':
                result = value * value * value;
                break;
            case 'exp':
                result = Math.exp(value);
                break;
            case 'pi':
                result = Math.PI;
                break;
            case 'e':
                result = Math.E;
                break;
            default:
                result = value;
        }

        const expression = `${func}(${value}) = ${result}`;
        setHistory([expression, ...history]);
        setDisplay(String(result));
        setWaitingForNewValue(true);
    };

    const factorial = (n) => {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    const handleClear = () => {
        setDisplay('0');
        setPrevious(null);
        setOperation(null);
        setWaitingForNewValue(false);
    };

    const handleBackspace = () => {
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay('0');
        }
    };

    const handleParenthesis = (type) => {
        if (type === '(') {
            setDisplay(display === '0' ? '(' : display + '(');
        } else {
            setDisplay(display + ')');
        }
    };

    const clearHistory = () => {
        setHistory([]);
    };

    return (
        <div style={styles.container}>
            <div style={styles.calculatorWrapper}>
                <div style={styles.mainCalculator}>
                    <h1 style={styles.title}>Scientific Calculator</h1>
                    <div style={styles.display}>{display}</div>

                    <div style={styles.buttonGrid}>
                        <button
                            style={{ ...styles.button, ...styles.clearButton }}
                            onClick={handleClear}
                        >
                            AC
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.clearButton }}
                            onClick={handleBackspace}
                        >
                            ← Del
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleParenthesis('(')}
                        >
                            (
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleParenthesis(')')}
                        >
                            )
                        </button>

                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('sin')}
                        >
                            sin
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('cos')}
                        >
                            cos
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('tan')}
                        >
                            tan
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.operationButton }}
                            onClick={() => handleOperation('/')}
                        >
                            ÷
                        </button>

                        <button style={styles.button} onClick={() => handleNumber(7)}>
                            7
                        </button>
                        <button style={styles.button} onClick={() => handleNumber(8)}>
                            8
                        </button>
                        <button style={styles.button} onClick={() => handleNumber(9)}>
                            9
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.operationButton }}
                            onClick={() => handleOperation('*')}
                        >
                            ×
                        </button>

                        <button style={styles.button} onClick={() => handleNumber(4)}>
                            4
                        </button>
                        <button style={styles.button} onClick={() => handleNumber(5)}>
                            5
                        </button>
                        <button style={styles.button} onClick={() => handleNumber(6)}>
                            6
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.operationButton }}
                            onClick={() => handleOperation('-')}
                        >
                            −
                        </button>

                        <button style={styles.button} onClick={() => handleNumber(1)}>
                            1
                        </button>
                        <button style={styles.button} onClick={() => handleNumber(2)}>
                            2
                        </button>
                        <button style={styles.button} onClick={() => handleNumber(3)}>
                            3
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.operationButton }}
                            onClick={() => handleOperation('+')}
                        >
                            +
                        </button>

                        <button style={styles.button} onClick={() => handleNumber(0)}>
                            0
                        </button>
                        <button style={styles.button} onClick={handleDecimal}>
                            .
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.equalsButton }}
                            onClick={handleEquals}
                        >
                            =
                        </button>

                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('sqrt')}
                        >
                            √
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('square')}
                        >
                            x²
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('cube')}
                        >
                            x³
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('reciprocal')}
                        >
                            1/x
                        </button>

                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('log')}
                        >
                            log
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('ln')}
                        >
                            ln
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('exp')}
                        >
                            eˣ
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.operationButton }}
                            onClick={() => handleOperation('pow')}
                        >
                            x^y
                        </button>

                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('factorial')}
                        >
                            n!
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('abs')}
                        >
                            |x|
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('pi')}
                        >
                            π
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.functionButton }}
                            onClick={() => handleScientificFunction('e')}
                        >
                            e
                        </button>
                    </div>
                </div>

                <div style={styles.historyPanel}>
                    <div style={styles.historyTitle}>📋 History</div>
                    {history.length === 0 ? (
                        <div style={{ ...styles.historyItem, color: '#999' }}>
                            No calculations yet
                        </div>
                    ) : (
                        history.map((item, index) => (
                            <div key={index} style={styles.historyItem}>
                                {item}
                            </div>
                        ))
                    )}
                    {history.length > 0 && (
                        <button
                            style={styles.clearHistoryButton}
                            onClick={clearHistory}
                            onMouseEnter={(e) =>
                                (e.target.style.backgroundColor = '#d93026')
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.backgroundColor = '#ff3b30')
                            }
                        >
                            Clear History
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ScientificCalculator;