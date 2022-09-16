interface ServiceConfiguration {
  [key: string]: any;
}

interface DependencyDefinition {
  symbol: Symbol;
  propertyName: string;
  config?: ServiceConfiguration;
}

declare enum InjectorHookType {
  BeforeInject,
  AfterInject,
  BeforeConfigure,
  AfterConfigure
}

interface InjectorHook {
  type: InjectorHookType;
  propertyName: string;
}

interface ConfigProperty {
  propertyName: string;
  isMandatory: boolean;
  transformFn: ((value: any) => any) | null;
}

interface ServiceImplementation<T> {
  __dependencies__?: DependencyDefinition[];
  __configProperties__?: ConfigProperty[];
  __hooks__?: InjectorHook[];
  __resolved__?: Map<Symbol, Object>;
  new(): T;
}

interface IEntryPoint {
  run(): Promise<void> | void;
}

interface IModule {
  load(registry: IServiceRegistry): void;
}

interface IServiceRegistryConfig {
  /**
   * This IoC Container instance will be used to resolve all `@lazyResolve`
   * decorated dependencies if this is set to `true`. Defaults to `false`.
   */
  useForLazyResolving: boolean;
}

/**
 * Symbol referencing currently used instance of IoC container.
 * You can use this e.g. if you want to register services dynamically.
 */
declare const SServiceRegistry: Symbol;

interface IServiceRegistry {
  /**
   * Load module which implements `IModule`.
   *
   * @example
   * import { LoggerModule } from 'Library/Logger/Logger.module';
   *
   * registry.loadModule(LoggerModule);
   */
  loadModule(module: new () => IModule): IServiceRegistry;

  /**
   * Register a service for given `Symbol`, so it can be retrieved by using that `Symbol`.
   * The registry will create a new instance on every service request.
   *
   * @example
   * import { SLogger } from 'Contract/Logger/Logger';
   * import { ConsoleLogger } from './ConsoleLogger';
   *
   * registry.registerService(SLogger, ConsoleLogger);
   */
  registerService(identifier: Symbol | Symbol[], implementation: ServiceImplementation<Object>): IServiceRegistry;

  /**
   * Register a singleton for given `Symbol`, so it can be retrieved by using that `Symbol`.
   * The registry will create only one instance and it will serve it on every request.
   *
   * @example
   * import { SLoggerConfiguration } from 'Contract/Logger/Logger';
   * import { LoggerConfiguration } from './LoggerConfiguration';
   *
   * registry.registerService(SLoggerConfiguration, LoggerConfiguration);
   */
  registerSingleton(identifier: Symbol | Symbol[], implementation: ServiceImplementation<Object>): IServiceRegistry;

  /**
   * Register an instance for given `Symbol`, so it can be retrieved by using that `Symbol`.
   * The registry will serve this instance on every request.
   *
   * @example
   * const SMyInstance = Symbol('MyInstance');
   *
   * registry.registerService(SMyInstance, { myNumber: 1, myBoolean: true });
   */
  registerInstance(identifier: Symbol | Symbol[], instance: Object): IServiceRegistry;

  /**
   * Request a service instance.
   * You can provide config properties if the service supports them.
   *
   * @example
   * import { ILogger, SLogger } from 'Contract/Logger/Logger';
   *
   * registry.get<ILogger>(SLogger, { tag: 'MyExampleTag' })
   */
  get<ServiceType>(identifier: Symbol, config?: ServiceConfiguration): ServiceType;

  /**
   * Create a new instance of the given implementation without registering it in the registry.
   * The instance won't be managed by the registry.
   *
   * @example
   * import { ConsoleLogger } from './ConsoleLogger';
   *
   * registry.createInstance(ConsoleLogger);
   */
  createInstance<ServiceType>(
    implementation: ServiceImplementation<ServiceType>, config?: ServiceConfiguration
  ): ServiceType;

  /**
   * Bootstrap an entry point service.
   * It needs to implement `IEntryPoint`.
   *
   * @example
   * import { FrameworkApplication } from './FrameworkApplication';
   *
   * registry.bootstrap(FrameworkApplication);
   */
  bootstrap(entryPoint: ServiceImplementation<IEntryPoint>, config?: ServiceConfiguration): Promise<void>;

  /**
   * Check if a service, singleton or instance is registered for given `Symbol`.
   *
   * @example
   * import { SLogger } from 'Contract/Logger/Logger';
   *
   * registry.isRegistered(SLogger);
   */
  isRegistered(identifier: Symbol): boolean;
}

interface Symbols {
  SOfflineConfig: Symbol;
}

declare const registry: IServiceRegistry;
