import { Visibility, Weather } from "../types";
import ErrorNotification from "./ErrorNotification";

interface NewEntryProps {
    addEntry: (event: React.FormEvent<HTMLFormElement>) => void;
    newInputDate: string;
    handleInputDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    newVisibility: string | undefined;
    handleVisibilityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    newWeather: string | undefined;
    handleWeatherChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    newComment: string;
    handleCommentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
}

export const NewDiaryEntryForm = (props: NewEntryProps) => {
    return (
        <div>
            <h2>Add new entry</h2>
            <ErrorNotification message={props.errorMessage} />
            <form onSubmit={props.addEntry}>
                <div>
                    date: <input
                    type="date"
                    value={props.newInputDate}
                    onChange= {props.handleInputDateChange} />
                </div>
                <div>
                    visibility:
                    <label>
                        <input
                        type="radio"
                        value={Visibility.Great}
                        checked={props.newVisibility === Visibility.Great}
                        onChange={props.handleVisibilityChange}
                        />
                        Great
                    </label>
                    <label>
                        <input
                        type="radio"
                        value={Visibility.Good}
                        checked={props.newVisibility === Visibility.Good}
                        onChange={props.handleVisibilityChange}
                        />
                        Good
                    </label>
                    <label>
                        <input
                        type="radio"
                        value={Visibility.Ok}
                        checked={props.newVisibility === Visibility.Ok}
                        onChange={props.handleVisibilityChange}
                        />
                        Ok
                    </label>
                    <label>
                        <input
                        type="radio"
                        value={Visibility.Poor}
                        checked={props.newVisibility === Visibility.Poor}
                        onChange={props.handleVisibilityChange}
                        />
                        Poor
                    </label>
                </div>
                <div>
                    weather:
                    <label>
                        <input
                        type="radio"
                        value={Weather.Sunny}
                        checked={props.newWeather === Weather.Sunny}
                        onChange={props.handleWeatherChange}
                        />
                        Sunny
                    </label>
                    <label>
                        <input
                        type="radio"
                        value={Weather.Rainy}
                        checked={props.newWeather === Weather.Rainy}
                        onChange={props.handleWeatherChange}
                        />
                        Rainy
                    </label>
                    <label>
                        <input
                        type="radio"
                        value={Weather.Cloudy}
                        checked={props.newWeather === Weather.Cloudy}
                        onChange={props.handleWeatherChange}
                        />
                        Cloudy
                    </label>
                    <label>
                        <input
                        type="radio"
                        value={Weather.Stormy}
                        checked={props.newWeather === Weather.Stormy}
                        onChange={props.handleWeatherChange}
                        />
                        Stormy
                    </label>
                    <label>
                        <input
                        type="radio"
                        value={Weather.Windy}
                        checked={props.newWeather === Weather.Windy}
                        onChange={props.handleWeatherChange}
                        />
                        Windy
                    </label>
                </div>
                <div>
                    comment: <input
                    value={props.newComment}
                    onChange= {props.handleCommentChange} />
                </div>
                <div>
                 <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
};